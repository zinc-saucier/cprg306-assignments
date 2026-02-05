"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function NewItem() {
  //useState variables for form fields
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState<string>("Produce");
  const [nameTouched, setNameTouched] = useState<boolean>(false);
  
//submission handler with validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || name.length <2) {
      document.getElementById("error").innerHTML = "Name must be longer than 1 character"
      
    } else {
    let NewItem = { name: name, quantity: quantity, category: category };
    console.log(name, quantity, category);
    alert(`Item name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    clear();
    }
  };
  //event handlers
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  //error handling for name field, final form validation to allow submit
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
  //reset the form, easy button
  const clear = () => {
    location.reload();
  }
  

  return (
    <div className="flex flex-col place-content-center items-center  bg-cyan-900">
      <div className="flex flex-row justify-items-center">
      <Image className="shadow-lg"
        src="/bread.png"
        alt="loaf of bread"
        height={100}
        width={100}
        priority
      />{/*source URL: https://pixabay.com/illustrations/search/food/ */}
      <h1 className="flex p-2 mt-8 font-bold text-xl ">Add items to your Shopping List!</h1>
      <Image className="shadow-lg"
        src="/chocolate.png"
        alt="chocolate bar"
        height={100}
        width={100}
        priority
      />{/*source URL: https://pixabay.com/illustrations/search/food/ */}
      </div>
      <div className="flex self-center w-3/4 max-w-500 bg-cyan-900 p-5">
         
          <form
            className="flex flex-col place-items-center gap-2 w-full border-2 border-orange-400"
            name="form"
            id="form"
            onSubmit={handleSubmit}
          >
            <label>Item Name:</label>

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
    </div>
  );
}
