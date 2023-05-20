import Title from "../ui/Title";
import Image from "next/image";
import { Modal, Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PacmanLoader from "react-spinners/PacmanLoader";

const Search = ({ isSearchModal, setIsSearchModal }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(1);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleOk = () => {
    setIsSearchModal(false);
  };
  const handleCancel = () => {
    setIsSearchModal(false);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLocaleLowerCase());
    setFiltered(
      products.filter((prod) => prod.title.toLocaleLowerCase().includes(search))
    );
  };

  return (
    <>
      <Modal
        title={false}
        open={isSearchModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Title className="text-4xl text-black text-center mt-12 mb-6">
          Search
        </Title>
        <Input size="large" placeholder="Search..." onChange={handleSearch} />
        <div>
          <ul className="mt-4">
            {products
              .slice(0, 5)
              .filter((prod) => prod.title.toLocaleLowerCase().includes(search))
              .map((product) => (
                <li
                  className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg shadow-md cursor-pointer"
                  key={product._id}
                  onClick={() => {
                    router.push(`/product/${product._id}`);
                    setIsSearchModal(false);
                  }}
                >
                  <div>
                    <Image src={product.img} width={100} height={100} alt="" />
                  </div>
                  <span className="font-bold">{product.title}</span>
                  <span className="font-bold">${product.prices[0]}</span>
                </li>
              ))}
            {filtered.length === 0 ? (
              <div className="flex justify-center items-center">
                <PacmanLoader color="#fca311" />
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Search;
