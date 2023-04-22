import Header from "@/components/layout/Header";
import Title from "@/components/ui/Title";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center gap-20 flex-wrap">
        <div className="relative h-[45%] max-w-[600px] min-w-[400px] lg:mt-0 mt-4">
          {/* <img src="/images/f1.png" alt="" className="h-full w-full" /> */}
          <Image src="/images/f1.png" alt="" fill />
        </div>
        <div className="flex flex-col lg:items-start items-center">
          <Title className="text-6xl mb-8">Good Pizza</Title>
          <span className="text-primary underline text-2xl font-bold inline-block mb-8 hover:scale-110 transition-all">
            $10
          </span>
          <p className="sm:max-w-2xl max-w-xs mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            ullam neque vero, pariatur velit tempore rem autem adipisci minima
            ea numquam nemo nihil nesciunt? Nesciunt.
          </p>
          <div className="mb-6">
            <h4 className="font-bold mb-2">Choose The Size</h4>
            <div className="flex items-center gap-x-8">
              <div className="relative h-8 w-8 hover:scale-110 transition-all cursor-pointer">
                <Image src="/images/size.png" alt="" fill />
                <span className="absolute top-0 -right-6 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                  Small
                </span>
              </div>
              <div className="relative h-12 w-12 hover:scale-110 transition-all cursor-pointer">
                <Image src="/images/size.png" alt="" fill />
                <span className="absolute top-1 -right-7 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                  Medium
                </span>
              </div>
              <div className="relative h-16 w-16 hover:scale-110 transition-all cursor-pointer">
                <Image src="/images/size.png" alt="" fill />
                <span className="absolute top-1 -right-4 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-bold mb-2">Choose Additional Ingredients</h4>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="accent-primary peer" />
                <span className="peer-checked:font-semibold">ketçap</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="accent-primary peer" />
                <span className="peer-checked:font-semibold">mayonez</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" className="accent-primary peer" />
                <span className="peer-checked:font-semibold">acı sos</span>
              </label>
            </div>
          </div>
          <button className="btn-primary mb-8">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Index;
