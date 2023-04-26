import Link from "next/link";

const Logo = () => {
  return (
    <div className="md:text-6xl text-4xl font-dancing font-bold hover:text-primary transition-all mt-2 sm:ml-0 ml-2">
      <Link href="/">Feane</Link>
    </div>
  );
};

export default Logo;
