import Title from "../ui/Title";
import { Modal } from "antd";

const AddProduct = ({ addProductModal, setAddProductModal }) => {
  const handleOk = () => {
    setAddProductModal(false);
  };
  const handleCancel = () => {
    setAddProductModal(false);
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
            <label className="font-bold text-md mb-1">Choose An Image</label>
            <input type="file" />
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Title</label>
            <input
              type="text"
              placeholder="write a title"
              className="outline-none border w-full px-2"
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Description</label>
            <textarea
              type="text"
              rows="3"
              cols="50"
              placeholder="write a title"
              className="outline-none border w-full px-2 py-1"
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Categories</label>
            <select className="w-full outline-none">
              <option>Select a Category</option>
              <option value="">Category1</option>
              <option value="">Category2</option>
              <option value="">Category3</option>
            </select>
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md mb-1">Prices</label>
            <div className="flex gap-4">
              <div className="">
                <input
                  type="number"
                  placeholder="small"
                  className="outline-none w-[100px] px-2 border-b"
                />
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="medium"
                  className="outline-none w-[100px] px-2 border-b"
                />
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="large"
                  className="outline-none w-[100px] px-2 border-b"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start my-4">
            <label className="font-bold text-md">Extra</label>
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex w-full justify-start gap-4">
                <input
                  type="text"
                  placeholder="item"
                  className="outline-none w-[100px] px-2 border-b"
                />

                <input
                  type="number"
                  placeholder="price"
                  className="outline-none w-[100px] px-2 border-b"
                />
              </div>
              <button className="btn-primary">add</button>
            </div>
            <div className="mt-3">
              <span className="border border-orange-400 text-orange-400 rounded-full p-1 mr-2">
                ketçap
              </span>
              <span className="border border-orange-400 text-orange-400 rounded-full p-1 mr-2">
                mayonez
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div></div>
            <button className="bg-green-500 text-white rounded-full px-7 py-2">
              create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddProduct;
