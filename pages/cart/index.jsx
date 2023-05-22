import Title from "@/components/ui/Title";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "@/redux/cartSlice";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Index = ({ userList }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const user = userList?.find((user) => user.email === session?.user?.email);
  const router = useRouter();

  const newOrder = {
    customer: user?.name,
    address: user?.address ? user?.address : "No Adress",
    total: cart?.total,
    status: 0,
    method: 0,
  };

  const createOrder = async () => {
    try {
      if (user) {
        if (confirm("Are you sure for ordering?")) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders`,
            newOrder
          );
          if (res.status === 200) {
            router.push(`/order/${res.data._id}`);
            dispatch(reset());
            toast.success("Ordering Succesfully", { autoClose: 1000 });
          }
        }
      } else {
        toast.error("You should login first!", { autoClose: 1000 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <Head>
        <title>Food Ordering | Cart</title>
      </Head>
      <div className="flex justify-between items-start md:flex-row flex-col">
        <div className="w-full flex max-h-[400px] items-start flex-1 md:p-10 p-4 overflow-auto">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr
                  className="bg-secondary border-gray-700 hover:bg-primary duration-500"
                  key={Math.random()}
                >
                  <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <Image src={product.img} alt="" width={50} height={50} />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <span>
                      {product.extras.length > 0
                        ? product.extras.map((extra) => {
                            return (
                              <span className="mr-3" key={Math.random()}>
                                {extra.text}
                                {product.extras.length > 1 ? "," : ""}
                              </span>
                            );
                          })
                        : "empty extra"}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary md:mb-0 -mb-20 text-white flex flex-col md:items-start items-center gap-3 p-20 md:w-auto w-full">
          <Title className="text-6xl mb-4">Cart Total</Title>
          <span>Subtotal : ${cart.total.toFixed(2)}</span>
          <span>Discount : $0.00</span>
          <span>Total : ${cart.total.toFixed(2)}</span>
          <div className="flex flex-col mt-10">
            <button className="btn-primary mt-4" onClick={createOrder}>
              Checkout Now
            </button>
            <button
              className="btn-primary mt-6 !bg-red-600"
              onClick={() => {
                if (confirm("are you sure to delete order/orders ?")) {
                  dispatch(reset());
                }
              }}
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const users = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return {
    props: {
      userList: users.data ? users.data : [],
    },
  };
};

export default Index;
