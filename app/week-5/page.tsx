import ItemList from "./item-list";


export default function week5() {
   
    return (
    <main>
        <div className="flex flex-col place-items-center bg-cyan-900">
            <h1 >Shopping List</h1>
            <ul><ItemList/></ul>
        </div>
    </main>
  );
}