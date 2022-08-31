import classes from "./ErrorMessage.module.css";

interface ErrorMesageProps {
  error: string;
}

export const ErrorMessage = ({ error }: ErrorMesageProps) => {
  const { arr_message } = classes;

  return <div className={arr_message}>{error}</div>;
};
