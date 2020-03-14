import Product from "../../models/Product";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRquest(req, res);
      break;
    case "DELETE":
      await handleDeleteRquest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRquest(req, res) {
  const { _id } = req.query; //create obj
  const product = await Product.findOne({ _id }); //findOne id, pass obj(_d) to product variable
  res.status(200).json(product);
}

async function handleDeleteRquest(req, res) {
  const { _id } = req.query;
  await Product.findOneAndDelete({ _id });
  res.status(204).json({});
}
