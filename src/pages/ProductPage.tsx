import classes from "./ProductPage.module.css";
import { useContext } from "react";
import { useProducts } from "../hooks/products";
import Product from "../components/product/Product";
import { Loader } from "../components/louder/Loader";
import { ErrorMessage } from "../components/errorMessage/ErrorMessage";
import { Modal } from "../components/modal/Modal";
import { ProductForm } from "../components/productForm/ProductForm";
import { IPproduct } from "../models";
import { ModalContext } from "../context/ModalContext";

export const ProductPage = () => {
  const { container, btn_prod_add } = classes;
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const creatHandler = (product: IPproduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className={container}>
      {loading && <Loader />}
      {loading && <ErrorMessage error={error} />}
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
      {modal && (
        <Modal title="Add new product" onClose={close}>
          <ProductForm onCreat={creatHandler} />
        </Modal>
      )}
      <button className={btn_prod_add} onClick={open}>
        +
      </button>
    </div>
  );
};
