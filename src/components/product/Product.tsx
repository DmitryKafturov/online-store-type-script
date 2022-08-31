import React from "react";
import { useState } from "react";
import { IPproduct } from "../../models";
import classes from "./Product.module.css";

interface ProductProps {
  product: IPproduct;
}

const Product = ({ product }: ProductProps) => {
  const {
    prod,
    prod__image,
    prod__price,
    prod__btn,
    prod__btn_blue,
    prod__btn_yellow,
    prod__rate,
    prod__desc,
  } = classes;
  const [details, setDetails] = useState(false);

  const classBgBtn = details ? prod__btn_blue : prod__btn_yellow;
  const classesBtn = [prod__btn, classBgBtn];

  return (
    <div className={prod}>
      <img
        className={prod__image}
        src={product.image}
        alt={product.title}
      ></img>
      <p>{product.title}</p>
      <span className={prod__price}>{product.price}</span>
      <button
        className={classesBtn.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {!details ? "Open details " : "Close details"}
      </button>
      {details && (
        <div>
          <p className={prod__desc}>{product.description}</p>
          <p>
            Rate:
            <span className={prod__rate}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
