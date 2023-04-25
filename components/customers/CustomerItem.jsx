import Image from "next/image";

const CustomerItem = ({ image }) => {
  return (
    <div className="mx-4">
      <div className="flex flex-col items-center">
        <div className="bg-secondary p-6 text-white rounded-[5px] mt-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            minus doloremque officiis nisi excepturi nam repellendus quasi
            expedita beatae laboriosam!
          </p>
          <div className="flex flex-col mt-4">
            <span className="text-lg font-semibold">Moana Michell</span>
            <span className="text-[15px]">magna aliqua</span>
          </div>
        </div>
        <div
          className="relative h-28 w-28 mt-8 border-primary border-4 rounded-full before:content-[''] before:absolute before:top-0 
      before:left-10 before:h-5 before:w-5 before:bg-primary before:-translate-y-4 before:rotate-45"
        >
          <Image src={image} fill alt="" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
