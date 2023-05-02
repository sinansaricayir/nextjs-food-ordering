import Title from "@/components/ui/Title";
import Head from "next/head";
import Image from "next/image";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <Head>
        <title>Food Ordering | Cart</title>
      </Head>
      <div className="flex justify-between items-center md:flex-row flex-col">
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
              <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
                <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>mayone,acı sos,ketçap</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $20
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary md:mb-0 -mb-20 text-white flex flex-col md:items-start items-center gap-3 p-20 md:w-auto w-full">
          <Title className="text-6xl mb-4">Cart Total</Title>
          <span>Subtotal : $20.00</span>
          <span>Discount : $0.00</span>
          <span>Total : $20.00</span>
          <button className="btn-primary mt-4">Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
