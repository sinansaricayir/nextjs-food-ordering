import Product from "@/models/Product";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "DELETE") {
    try {
      await Product.findByIdAndRemove(id);
      res.status(200).json({ message: "Deleted Successfully!" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
