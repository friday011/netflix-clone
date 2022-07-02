import { FC, PropsWithChildren } from "react";
import { useField } from "formik";

interface IPasswordInput {
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  isInvalid?: boolean;
}

const PasswordInput: FC<PropsWithChildren<IPasswordInput>> = props => {
  const [field, meta] = useField(props);

  return (
    <label htmlFor="password">
      <input type="password" {...props} {...meta} />
    </label>
  );
};

export default PasswordInput;
