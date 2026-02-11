"use client";
import { useState } from "react";
import Item from "./item";
import list from "./items.json";

//create items and store them in a list
const items = [];
    for (let i=0; i < list.length; i++){
        items.push(
            <Item
                id={list[i].id}
                name={list[i].name}
                quantity={list[i].quantity}
                category={list[i].category}
            />)
    }
console.log(items)

export default function ItemList() {
    
    const [sortBy, setSortBy] = useState<String>("name");

    const sortName = () => {
        setSortBy("name")
        let ListItems = ([...items].sort((a, b) => a.name < b.name ? 1:-1,)).map((Item) => (<li key={Item.id}>{Item}</li>));
        return ListItems
    } 
    const sortCat = () => {
        setSortBy("category")
        let ListItems = ([...items].sort((a, b) => a.quantity < b.quantity ? 1:-1,)).map((Item) => (<li key={Item.id}>{Item}</li>));
        return ListItems
    }
    const changeSort = () => {
        if (sortBy==="name") {
            let sort = sortName()
            return sort;
        }else {
            let sort = sortCat()
            return sort;
        }
        
    }

   
    let ListItems = ([...items].sort((a, b) => a.quantity < b.quantity ? 1:-1,));
    console.log(ListItems)
   
    
    

    return (
        <div>
            
            <button 
            className="place-items-center bg-blue-300 text-blue-950  border-2 border-orange-400 m-2 p-1"
            id="nameButton"
            type="button" 
            onClick={changeSort}
            >Sort items by name</button>

            <button 
            className="place-items-center bg-blue-300 text-blue-950  border-2 border-orange-400 m-2 p-1"
            id="catButton"
            type="button" 
            onClick={changeSort}
            >Sort items by category</button>
          
            <ul>{[...ListItems].map(item => <li key={item.id}>{item}</li>)}</ul>

        </div>
    )

}