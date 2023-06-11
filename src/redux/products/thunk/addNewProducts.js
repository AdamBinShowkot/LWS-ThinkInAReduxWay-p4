import { addNewProduct } from "../action";

const addNewProducts=(productData)=>{
    return async (dispatch)=>{
        const {name,author,thumbnail,rating,price,featured}=productData;
        const response = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify({
                name,
                author,
                price,
                thumbnail,
                rating,
                featured
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const product = await response.json();
        console.log("Product : ",product);
        dispatch(addNewProduct(product));
    }
}
export default addNewProducts;