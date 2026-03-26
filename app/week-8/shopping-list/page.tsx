"use client";
import { useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import Link from "next/link";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import Item, { ItemProps } from "./item";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";

type OnAdditem = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function week8() {
  const [items, setItems] = useState<OnAdditem[]>([...itemsData]);
  const { user } = useUserAuth();

  const handleAddItem = (item: OnAdditem) => {
    setItems([...itemsData, item]);
    console.log(item);
  };

  return (
    <main>
      {user != null && (
        <div className="flex flex-col place-items-center bg-cyan-900">
          <h1>Shopping List</h1>
          <Link className="" href="/week-8">
            <u>Back to Login</u>
          </Link>
          <div className="flex flex-col place-items-center">
            <NewItem items={items} handleAddItem={handleAddItem} />
          </div>
          <div>
            <MealIdeas />
          </div>
          <div className="flex flex-col place-items-center">
            <ItemList list={items} />
          </div>
        </div>
      )}
    </main>
  );
}
