
type ItemProps = {
    name: string;
    quantity: number;
    category: string;
}


export default function Item(Props: ItemProps){

    return (
            <li key={Props.name} className="place-items-center">
                <p className="text-xl text-orange-400">Item name: {Props.name}</p>
                <p className="text-lg">Quantity: {Props.quantity}</p>
                <p className="text-lg">Category: {Props.category}</p>
            </li>  
    );
}
