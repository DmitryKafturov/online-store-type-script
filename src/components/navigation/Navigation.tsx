import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  const { nav_route, nav_link, nav_link_wrap, nav__header } = classes;

  return (
    <nav className={nav_route}>
      <h1 className={nav__header}>Menu</h1>
      <span className={nav_link_wrap}>
        <Link className={nav_link} to="/">
          Products
        </Link>
        <Link className={nav_link} to="/about">
          Description
        </Link>
      </span>
    </nav>
  );
};
