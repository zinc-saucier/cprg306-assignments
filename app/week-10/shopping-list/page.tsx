"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import Link from "next/link";

import ItemList from "./item-list";
import NewItem from "./new-item";
//import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { getUserItems, addItem } from "../_services/shopping0list-service";

type OnAdditem = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function week10() {
  const [items, setItems] = useState([]);
  const { user } = useUserAuth();

  async function loadItems() {
    console.log("I got here..")
    const itemList: any = getUserItems("Id_1");
    setItems(itemList);
    console.log(itemList)
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = (item: OnAdditem) => {
    //setItems([...itemsData, item]);
    addItem(user.userName, item);
    console.log(item);
  };

  return (
    <main>
      {user != null && (
        <div className="flex flex-col place-items-center bg-cyan-900">
          <h1>Shopping List</h1>
          <Link className="" href="/week-10">
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
