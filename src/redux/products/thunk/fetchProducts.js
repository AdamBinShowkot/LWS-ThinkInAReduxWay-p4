import { loadedProducts } from "../action";

const fetchProducts=async(dispatch)=>{
    const response=await fetch("http://localhost:9000/books");

    const products=await response.json();

    dispatch(loadedProducts(products));
}
export default fetchProducts;