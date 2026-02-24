"use client";
import { useState } from "react";
import Item from "./item";
import list from "./items.json";

//create items and store them in a list - not needed, retaining for future debugging
// const items = [<Item key={i} id={""} name={""} quantity={0} category={""}/>];
//     for (let i=0; i < list.length; i++){
//         items.push(
//             <Item
//                 key={list[i].id}
//                 id={""}
//                 name={list[i].name}
//                 quantity={list[i].quantity}
//                 category={list[i].category}             />)
//     }
// console.log(items)

export default function ItemList() {
  const [sortBy, setSortBy] = useState<String>("name");
  const [listSort, setListSort] = useState([...list]);

  const sortName = () => {
    setSortBy("name");
    let nameList = [...list.toSorted((a, b) => a.name.localeCompare(b.name))];
    setListSort(nameList);
    console.group("sort by name");
    console.log(listSort);
    console.groupEnd();
    document.getElementById("category list").setAttribute("hidden", "true");
    document.getElementById("shopping list").removeAttribute("hidden");
  };
  const sortCat = () => {
    setSortBy("category");

    let catList = [
      ...list.toSorted((a, b) => a.category.localeCompare(b.category)),
    ];
    setListSort(catList);
    console.group("sort by category");
    console.log(listSort);
    console.groupEnd();
    document.getElementById("category list").setAttribute("hidden", "true");
    document.getElementById("shopping list").removeAttribute("hidden");
  };
  const groupCat = () => {
    setSortBy("group");
    let categories = [
      "bakery",
      "canned goods",
      "dairy",
      "household",
      "meat",
      "produce",
    ];
    for (let i = 0; i < categories.length; i++) {
      let groupList = [
        ...listSort.filter((item) => item.category == categories[i]),
      ];
      let items = [];
      for (let i = 0; i < groupList.length; i++) {
        items.push(
          <Item
            key={groupList[i].id}
            name={groupList[i].name}
            quantity={groupList[i].quantity}
            category={groupList[i].category}
          />,
        );
      }
    }

    document.getElementById("shopping list").setAttribute("hidden", "true");
    document.getElementById("category list").removeAttribute("hidden");
  };

  return (
    <div>
      <div className="place-items-center">
        <button
          className={`place-items-center text-blue-950 ${sortBy == "name" ? "bg-blue-500" : "bg-blue-300"} border-2 border-orange-400 m-2 p-1`}
          id="nameButton"
          type="button"
          onClick={sortName}
        >
          Sort items by name
        </button>

        <button
          className={`place-items-center text-blue-950 ${sortBy == "category" ? "bg-blue-500" : "bg-blue-300"} border-2 border-orange-400 m-2 p-1`}
          id="catButton"
          type="button"
          onClick={sortCat}
        >
          Sort items by category
        </button>

        <button
          className={`place-items-center text-blue-950 ${sortBy == "group" ? "bg-blue-500" : "bg-blue-300"} border-2 border-orange-400 m-2 p-1`}
          id="catButton"
          type="button"
          onClick={groupCat}
        >
          Group items by category
        </button>

        <h1>Shopping List sorted by {sortBy}</h1>
      </div>

      <div>
        <ul id="shopping list">
          {listSort.map((item, id) => (
            <Item
              key={id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
        <ul id="category list" className="capitalize" hidden>
          {/*temporary placeholder list */}
          {list.map((item, id) => (
            <Item
              key={id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
