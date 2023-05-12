import Title from "@/components/ui/Title";
import Input from "../form/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, [categories]);

  const handleCreate = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        {
          title: inputText,
        }
      );
      setInputText("");
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure want to delete category?")) {
        const deleted = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
        );
      }

      if (deleted.status === 200) {
        toast.success(deleted.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1 md:p-8 p-0 overflow-hidden">
      <Title className="text-4xl mb-8 md:mt-0 mt-8">Add A Category</Title>
      <div className="w-full max-h-[400px] overflow-auto my-8">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Add a new category"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button className="btn-primary" onClick={handleCreate}>
            Add
          </button>
        </div>
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-between sm:mt-8 mt-4 text-xl"
          >
            <b>{category.title}</b>
            <button
              onClick={() => handleDelete(category._id)}
              className="btn-primary text-sm !bg-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
