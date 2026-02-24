import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

function handleAddItem() {
    
}

export default function week5() {
   
    return (
    <main>
        <div className="flex flex-col place-items-center bg-cyan-900">
            <h1 >Shopping List</h1>
            <div className="flex flex-col place-items-center"><ItemList/></div>
        </div>
    </main>
  );
}