import Title from "../ui/Title";
import Image from "next/image";
import { Modal, Input } from "antd";

const Search = ({ isSearchModal, setIsSearchModal }) => {
  const handleOk = () => {
    setIsSearchModal(false);
  };
  const handleCancel = () => {
    setIsSearchModal(false);
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
        <Input size="large" placeholder="Search..." />
        <div>
          <ul className="mt-4">
            <li className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg shadow-md">
              <div>
                <Image src="/images/f1.png" width={100} height={100} alt="" />
              </div>
              <span className="font-bold">Good Pizza</span>
              <span className="font-bold">$10</span>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg shadow-md">
              <div>
                <Image src="/images/f1.png" width={100} height={100} alt="" />
              </div>
              <span className="font-bold">Good Pizza</span>
              <span className="font-bold">$10</span>
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg shadow-md">
              <div>
                <Image src="/images/f1.png" width={100} height={100} alt="" />
              </div>
              <span className="font-bold">Good Pizza</span>
              <span className="font-bold">$10</span>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Search;
