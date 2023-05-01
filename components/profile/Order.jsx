import Title from "@/components/ui/Title";

const Order = () => {
  return (
    <div className="flex-1 md:p-8 p-0">
      <Title className="text-4xl mb-8 md:mt-0 mt-8">Orders</Title>
      <div className="w-full overflow-auto">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary duration-500">
              <td className="flex justify-center items-center gap-1 py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>7434AU5E</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <span>Ankara</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                02-05-2023
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $18
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
