import Order from "@/models/Order";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "DELETE") {
    try {
      await Order.findByIdAndRemove(id);
      res.status(200).json({ message: "Deleted Successfully!" });
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "PUT") {
    try {
      await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ message: "Updated Successfully!" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
