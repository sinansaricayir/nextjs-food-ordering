import Title from "@/components/ui/Title";

const Orders = () => {
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
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                7434AU5E
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Sinan Sarıçayır
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
