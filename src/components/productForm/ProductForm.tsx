import axios from "axios";
import React from "react";
import { useState } from "react";
import { IPproduct } from "../../models";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import classes from "./ProductForm.module.css";

const productData: IPproduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreat: (product: IPproduct) => void;
}

export function ProductForm({ onCreat }: CreateProductProps) {
  const { form__input, form__btn } = classes;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Please enter valid title!!!");
      return;
    }
    productData.title = value;
    const respons = await axios.post<IPproduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreat(respons.data);
  };
  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={form__input}
        type="text"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button className={form__btn} type="submit">
        Create
      </button>
    </form>
  );
}
