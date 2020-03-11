/**creating export route for api */
//import products from '../../static/products.json' //on client
import Product from "../../models/Product"; //import product schema
import connectDb from "../../utils/connectDb";

connectDb();

/**senidng data to client from products.json through 200 status code */
export default async (req, res) => {
  const products = await Product.find(); //find data in schema
  res.status(200).json(products); //return in json object
};
