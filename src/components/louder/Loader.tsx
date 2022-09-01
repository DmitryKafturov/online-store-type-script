import classes from "./Louder.module.css";

export const Loader = () => {
  const { louder } = classes;

  return <div className={louder}>LOADING...</div>;
};
