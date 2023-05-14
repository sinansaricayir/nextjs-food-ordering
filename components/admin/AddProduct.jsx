/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Title from "../ui/Title";
import { Modal } from "antd";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = ({ addProductModal, setAddProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function categoryData() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      setCategories(res.data);
    }
    categoryData();
  }, []);

  const handleOk = () => {
    setAddProductModal(false);
  };

  const handleCancel = () => {
    setAddProductModal(false);
  };

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc(e.target.result);
      setFile(file);
    };

    reader.readAsDataURL(file);
  };

  const handleExtra = () => {
    if (extra) {
      if (extra.text && extra.prices) {
        setExtraOptions([...extraOptions, extra]);
        setExtra({ text: "", prices: "" });
      }
    }
  };

  const changePrice = (e, i) => {
    const currentPrices = prices;
    currentPrices[i] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/sinansaricayir/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        img: url,
        title,
        desc,
        prices,
        category: category.toLocaleLowerCase(),
        extraOptions,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct
      );

      if (res.status === 200) {
        setAddProductModal(false);
        toast.success("Product Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        title={false}
        open={addProductModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Title className="text-4xl text-black text-center mt-12 mb-6">
          Add A New Product
        </Title>
        <div>
          <div className="flex flex-col items-start my-4">
            <div className="flex items-center justify-between w-full">
              <label className="font-bold text-md mb-1">
                <input
                  type="file"
                  onChange={handleOnChange}
                  className="hidden"
                />
                <div className="text-white px-3 py-1 font-light !bg-blue-500 hover:opacity-70">
                  Choose An Image file
                </div>
              </label>

              {imageSrc && (
                <img
                  src={imageSrc}
                  alt=""
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="write a title"
              className="outline-none border w-full px-2"
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Description</label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              rows="3"
              cols="50"
              placeholder="write a title"
              className="outline-none border w-full px-2 py-1"
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Categories</label>
            <select
              className="w-full outline-none"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select a Category</option>
              {categories.map((category, i) => (
                <option key={i} value={category.title.toLocaleLowerCase()}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Prices</label>
            {category === "pizza" || category === "hamburger" ? (
              <div className="flex gap-4">
                <div className="">
                  <input
                    onChange={(e) => changePrice(e, 0)}
                    type="number"
                    placeholder="small"
                    className="outline-none w-[100px] px-2 border-b"
                  />
                </div>
                <div className="">
                  <input
                    onChange={(e) => changePrice(e, 1)}
                    type="number"
                    placeholder="medium"
                    className="outline-none w-[100px] px-2 border-b"
                  />
                </div>
                <div className="">
                  <input
                    onChange={(e) => changePrice(e, 2)}
                    type="number"
                    placeholder="large"
                    className="outline-none w-[100px] px-2 border-b"
                  />
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="">
                  <input
                    onChange={(e) => changePrice(e, 0)}
                    type="number"
                    placeholder="price"
                    className="outline-none w-[100px] px-2 border-b"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md">Extra</label>
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex w-full justify-start gap-4">
                <input
                  name="text"
                  type="text"
                  placeholder="item"
                  className="outline-none w-[100px] px-2 border-b"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                />

                <input
                  name="prices"
                  type="number"
                  placeholder="price"
                  className="outline-none w-[100px] px-2 border-b"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <button onClick={handleExtra} className="btn-primary">
                add
              </button>
            </div>
            <div className="mt-3">
              {extraOptions.map((extra, index) => (
                <span
                  key={index}
                  className="border border-orange-400 text-orange-400 rounded-full p-1 mr-2 shadow-md"
                  onClick={() => {
                    setExtraOptions(extraOptions.filter((_, i) => i !== index));
                  }}
                >
                  {extra.text}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div></div>
            <button
              onClick={handleCreate}
              className="bg-green-500 text-white rounded-full px-7 py-2"
            >
              create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddProduct;
