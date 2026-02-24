"use client";
import { useState, useEffect } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import Item from "./item";

type OnAdditem = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function week6() {
  const [items, setItems] = useState<OnAdditem[]>([...itemsData]);

  const handleAddItem = (item: OnAdditem) => {
    setItems([...itemsData, item]);
    console.log(item);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <main>
      <div className="flex flex-col place-items-center bg-cyan-900">
        <h1>Shopping List</h1>
        <div className="flex flex-col place-items-center">
          <NewItem items={items} handleAddItem={handleAddItem} />
        </div>
        <div className="flex flex-col place-items-center">
          <ItemList list={items} />
        </div>
      </div>
    </main>
  );
}
