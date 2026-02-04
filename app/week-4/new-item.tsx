"use client";

import React, { useState } from "react";

// type ItemParams = {
//   name: string;
//   quantity: number;
//   category: string;
// };

// styling, field restrictions, validation needed still

export default function NewItem() {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState<string>("Produce");
  const [nameTouched, setNameTouched] = useState<boolean>(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || name.length <2) {
      document.getElementById("error").innerHTML = "Name must be longer than 1 character"
      
    } else {
    let NewItem = { name: name, quantity: quantity, category: category };
    console.log(name, quantity, category);
    alert(`Item name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    clear();
    // setName("");
    // setQuantity(1);
    // setCategory("Produce");
    // setNameTouched(false);
    }
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleTouch = () => {
    if (name=="") {
    setNameTouched(true);
    document.getElementById("error").innerHTML = "You must enter a name"
    } else {
      setNameTouched(false)  
      document.getElementById("error").innerHTML = ""
      document.getElementById("submit").removeAttribute('disabled');
    }
  };
  const clear = () => {
    location.reload();
  }
  

  return (
    <div className="flex flex-col self-center w-3/4 max-w-500 bg-cyan-900 p-5">
      
        <form
          className="flex flex-col place-items-center gap-2 w-full border-2 border-orange-400"
          name="form"
          id="form"
          onSubmit={handleSubmit}
        >
          <label>Name:</label>

          <input
          className={`place-items-center bg-blue-300 border-2 ${nameTouched == false ? 'border-orange-400': 'border-red-600'} m-2 p-1 text-blue-950`}
            type="text"
            id="name"
            name="name"
            defaultValue={""}
            onChange={handleName}
            onBlur={handleTouch}
            
            required
          ></input>
          <p 
          className="text-red-500"
          id="error"></p>
          <label>Quantity:</label>

          <input
            className="place-items-center bg-blue-300 border-2 border-orange-400 m-2 p-1 text-blue-950"
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantity}
            min="1"
            max="99"
          ></input>
          <label>Category:</label>
          
          <select
            className="place-items-center bg-blue-300 border-2 border-orange-400 m-2 p-1 text-blue-950"

            id="category"
            name="category"
            defaultValue={"Produce"}
            onChange={handleCategory}
           
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
           </select> 
          

          <input 
          className="place-items-center bg-blue-300 text-blue-950  border-2 border-orange-400 m-2 p-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
          id="submit"
          type="submit" 
          value="Submit"
          disabled
          />
        </form>
    </div>
  );
}
