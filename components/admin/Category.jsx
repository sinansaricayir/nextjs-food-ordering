import Title from "@/components/ui/Title";
import Input from "../form/Input";
import { useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Hamburger" },
  ]);
  const [inputText, setInputText] = useState("");

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
          <button
            className="btn-primary"
            onClick={() => {
              setCategories([
                { name: inputText, id: Math.random() },
                ...categories,
              ]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between sm:mt-8 mt-4 text-xl"
          >
            <b>{category.name}</b>
            <button
              onClick={() =>
                setCategories(categories.filter((cat) => cat !== category))
              }
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
