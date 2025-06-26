import { useEffect, useState } from "react";

function Fetching(){
    const [products, setProducts] = useState([{title: "dummy1"}, {title: "dummy2"}, {title: "dummy3"}, {title: "dummy4"}]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((response)=> response.json())
        .then((data)=> setProducts(data.products));
    }, [])

    return(
        <>
        <h1>Data Fetching</h1>

        <div id = "items">
            {products.map((products) => <div id= "item">{products.title}</div>)}
        </div>
        </>
    )
}

export default Fetching;