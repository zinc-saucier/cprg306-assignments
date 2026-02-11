

export default function Item({name, quantity, category}) {



    return (
        <div className="flex flex-col place-items-center">
            
            <br/>
            <ul className="place-items-center">
                <li className="text-xl text-orange-400">Item name: {name}</li>
                <li className="text-lg">Quantity: {quantity}</li>
                <li className="text-lg">Category: {category}</li>
            </ul>
            
        </div>
    );
}