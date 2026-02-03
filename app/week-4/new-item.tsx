"use client";
import { useState } from "react";

// type ItemParams = {
//   name: string;
//   quantity: number;
//   category: string;
// };

export default function NewItem() {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState<string>("Produce");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let NewItem = { name: name, quantity: quantity, category: category };
    console.log(name, quantity, category);
    alert(`Item name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <p>
        <form
          className="flex flex-col gap-2"
          name="form"
          onSubmit={handleSubmit}
        >
          <label>Name:</label>

          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
          ></input>
          <label>Quantity:</label>

          <input
            type="number"
            id="quatity"
            name="quantity"
            value={quantity}
            onChange={handleQuantity}
          ></input>
          <label>Category:</label>

          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={handleCategory}
          ></input>

          <input type="submit" value="Submit"></input>
        </form>
      </p>
    </div>
  );
}
