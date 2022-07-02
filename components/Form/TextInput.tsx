import { FC, PropsWithChildren } from "react";
import { useField } from "formik";

interface ITextInput {
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  isInvalid?: boolean;
}

const TextInput: FC<PropsWithChildren<ITextInput>> = props => {
  const [field, meta] = useField(props);

  return (
    <label htmlFor="email">
      <input
        {...props}
        {...field}
        className={`${props.className} ${
          meta.touched && meta.error && "border border-red-400"
        }`}
      />
    </label>
  );
};

export default TextInput;
