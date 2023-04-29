import Head from "next/head";
import Image from "next/image";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)] flex flex-col justify-center">
      <Head>
        <title>Food Ordering | Order</title>
      </Head>
      <div className="md:p-10 p-4 ">
        <div className="w-full flex flex-1 flex-col md:overflow-hidden overflow-auto">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
                <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  4885AFQ23D
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Sinan Sarıçayr
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Ankara
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $22
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between px-8 py-4 bg-primary w-full mt-4 min-w-[1000px]">
            <div className="relative flex flex-col items-center animate-pulse">
              <Image src="/images/paid.png" width={40} height={40} alt="" />
              <span>Payment</span>
            </div>
            <div className="relative flex flex-col items-center animate-pulse">
              <Image src="/images/bake.png" width={40} height={40} alt="" />
              <span>Preparing</span>
            </div>
            <div className="relative flex flex-col items-center animate-pulse">
              <Image src="/images/bike.png" width={40} height={40} alt="" />
              <span>On the way</span>
            </div>
            <div className="relative flex flex-col items-center animate-pulse">
              <Image
                src="/images/delivered.png"
                width={40}
                height={40}
                alt=""
              />
              <span>Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
