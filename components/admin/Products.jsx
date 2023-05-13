import Image from "next/image";
import Title from "@/components/ui/Title";

const Products = () => {
  return (
    <div className="flex-1 md:p-8 p-0 overflow-hidden">
      <Title className="text-4xl mb-10 md:mt-0 mt-8">Products</Title>
      <div className="w-full max-h-[400px] overflow-auto mb-8">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
          <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7648UIE56
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Good Pizza
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-danger rounded-md text-white py-1 px-2 hover:opacity-70">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <Image src="/images/f2.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7648UIE56
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Double Burger
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-danger rounded-md text-white py-1 px-2 hover:opacity-70">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <Image src="/images/f3.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7648UIE56
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Delicious Pizza
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-danger rounded-md text-white py-1 px-2">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
