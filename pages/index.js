import React from "react";
import axios from "axios"; /**library for crud calls */
import ProductList from "../components/Index/ProductList";

function Home({ products }) {
  return <ProductList products={products} />;
}

/**Next.js funct, get data directly on server */
Home.getInitialProps = async () => {
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url); //fetch data on server
  return { products: response.data }; //return repsonse as object
  //note: objects will be merged with existing props
};

export default Home;
