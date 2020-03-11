import axios from "axios";
import ProductSummary from "../components/Product/ProductSummary";
import ProductAttributes from "../components/Product/ProductAttributes";
import baseUrl from "../utils/baseUrl";

function Product({ product }) {
  return (
    /**Import components */
    <>
      <ProductSummary {...product} />
      <ProductAttributes {...product} />
    </>
  );
}

//Access json objects
Product.getInitialProps = async ({ query: { _id } }) => {
  //get _id from schema
  const url = `${baseUrl}/api/product`;
  const payload = { params: { _id } }; //create obj
  const response = await axios.get(url, payload); //get request, pass to obj
  return { product: response.data }; //return obj
};

export default Product;
