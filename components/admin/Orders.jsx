import Title from "@/components/ui/Title";
import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const status = ["preparing", "on the way", "delivered"];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [orders]);

  const handleStatus = async (id) => {
    const item = orders.find((order) => order._id === id);
    const currentStatus = item.status;
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
        {
          status: currentStatus + 1,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1 md:p-8 p-0 overflow-hidden">
      <Title className="text-4xl mb-8 md:mt-0 mt-8">Orders</Title>
      <div className="w-full max-h-[400px] overflow-auto mb-8">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {orders
              ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((order) => (
                <tr
                  className="bg-secondary border-gray-700 hover:bg-primary duration-500"
                  key={order._id}
                >
                  <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order._id.substring(5, 12)}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order.customer}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    $ {order.total}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order.method === 0 ? "Cash" : "Cart"}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {status[order.status]}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      onClick={() => handleStatus(order?._id)}
                      className="px-2 py-1 bg-green-600 text-white rounded-md disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      disabled={order.status === 2}
                    >
                      Next Stage
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
