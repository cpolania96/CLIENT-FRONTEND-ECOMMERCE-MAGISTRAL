import React, { createContext, useState, useEffect, useContext } from "react";
import getAll from "../Services/Product/getAll";
import getById from "../Services/Product/getById";
import { AppContext } from "./AppContext";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();
  const [product, setProduct] = useState({});

  const { setLoading } = useContext(AppContext);

  //   Obtener listado de productos
  useEffect(() => {
    const data = getAll();
    setLoading(true);
    data.then((res) => {
      setProducts(res.res.data.docs), setLoading(false);
    });
  }, []);

  //   Obtener producto por ID
  const productId = id
  const data = getById(productId);
  useEffect(() => {
    data
    .then(res => setProduct(res))
  }, [id])
  return (
    <ProductContext.Provider value={{ products, product, setId }}>
      {children}
    </ProductContext.Provider>
  );
}
