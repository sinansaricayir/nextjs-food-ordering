import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto md:py-32 py-20 flex md:flex-row flex-col-reverse md:gap-10 items-center ">
        <div className="md:h-full md:w-full">
          <div className="hover:scale-110 transition-all md:w-full w-[300px] ease-in duration-500 ">
            <Image
              src="/images/about-img.png"
              width={445}
              height={605}
              alt=""
            />
          </div>
        </div>
        <div className="text-white w-full flex flex-col items-start justify-center sm:px-0 px-2 ">
          <Title className="mb-8 text-6xl">We Are Feane</Title>
          <p className="font-thin">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary mt-6 md:mb-0 mb-8">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
