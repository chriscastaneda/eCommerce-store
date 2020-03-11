import Product from "../../models/Product";

/**Find/Export schema object */
export default async (req, res) => {
  const { _id } = req.query; //create obj
  const product = await Product.findOne({ _id: _id }); //findOne id, pass obj(_d) to product variable
  res.status(200).json(product);
};
