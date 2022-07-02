import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import Image from "next/image";
import { Formik, Form, FormikHelpers, FormikProps, Field } from "formik";
import { FcGoogle } from "react-icons/fc";
import TextInput from "../components/Form/TextInput";
import PasswordInput from "../components/Form/PasswordInput";

interface FormValues {
  email: string;
  password: string;
}

const Login: FC<PropsWithChildren<{}>> = () => {
  const handleFormSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log({ values });
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="relative flex flex-col w-screen h-screen md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/loginbg.jpg"
        alt="background image"
        layout="fill"
        className="hidden -z-10 opacity-60 sm:inline"
        objectFit="cover"
      />
      <div className="absolute cursor-pointer top-4 left-4">
        <Image
          src="/images/logo-main.png"
          alt="Netflix Logo"
          height={30}
          width={100}
        />
      </div>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) =>
          handleFormSubmit(values, actions)
        }
      >
        {(props: FormikProps<FormValues>) => (
          <Form className="z-10 flex flex-col w-full max-w-md gap-8 px-16 pt-16 pb-32 rounded bg-black/80 bg-opacity-90">
            <h1 className="w-full text-4xl font-semibold text-left">Sign In</h1>
            <div className="flex flex-col w-full gap-4">
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="input"
              />
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-[#E50914] py-3 font-semibold"
            >
              Sign In
            </button>
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center w-full gap-4 text-gray-500">
                <div className="flex-1 h-[1px] bg-gray-500"></div>
                <div>Or</div>
                <div className="flex-1 h-[1px] bg-gray-500"></div>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full gap-2 py-3 font-semibold rounded bg-[#333]"
              >
                <FcGoogle className="w-4 h-4" />
                Sign In with Google
              </button>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-gray-500">New to Netflix?</p>
              <p className="cursor-pointer hover:underline">Sign up now</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
