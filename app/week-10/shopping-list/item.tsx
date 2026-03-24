import { useState } from "react";

export type ItemProps = {
  name: string;
  quantity: number;
  category: string;
};

export default function Item(Props: ItemProps) {
  const handleSelect = (item: string) => {
    console.log("selected item: ", { item });
  };

  return (
    <li
      key={Props.name}
      className="place-items-center"
      onClick={() => handleSelect(Props.name)}
    >
      <p className="text-xl text-orange-400">Item name: {Props.name}</p>
      <p className="text-lg">Quantity: {Props.quantity}</p>
      <p className="text-lg">Category: {Props.category}</p>
    </li>
  );
}
