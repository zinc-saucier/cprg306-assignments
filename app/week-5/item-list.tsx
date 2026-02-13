"use client";
import { useState } from "react";
import Item from "./item";
import list from "./items.json";

//create items and store them in a list
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
    const [clicked, setClicked] = useState("")
    

    

    const sortName = () => {
        setSortBy("name")
        let nameList=[...list.toSorted((a,b) => a.name.localeCompare(b.name))]
        setListSort(nameList);
        console.group('sort by name');
        console.log(listSort);
        console.groupEnd();
        
    } 
    const sortCat = () => {
        setSortBy("category")
        let catList=[...list.toSorted((a,b) => a.category.localeCompare(b.category))]
        setListSort(catList);
        console.group('sort by category');
        console.log(listSort);
        console.groupEnd();
       
    }
    const group =()=> {
        sortCat()

    }
   
    return (
        <div>
            <div className="place-items-center">
                
                <button 
                className="place-items-center bg-blue-300 text-blue-950  border-2 border-orange-400 m-2 p-1"
                id="nameButton"
                type="button" 
                onClick={sortName}
                >Sort items by name</button>

                <button 
                className="place-items-center bg-blue-300 text-blue-950  border-2 border-orange-400 m-2 p-1"
                id="catButton"
                type="button" 
                onClick={sortCat}
                >Sort items by category</button>

                <button 
                className="place-items-center bg-blue-300 text-blue-950  border-2 border-orange-400 m-2 p-1"
                id="catButton"
                type="button" 
                onClick={sortCat}
                >Sort items into categories</button>

                <h1>Shopping List sorted by {sortBy}</h1>
            </div>

            <div>
                <ul>
                    {listSort.map((item, id) => (
                        <Item key={id} name={item.name} quantity={item.quantity} category={item.category}/>
                        ))}
                </ul>
            </div>
        </div>
    )            
       

}