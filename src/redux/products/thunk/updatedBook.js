import { 
    updatedProduct 
} from "../action";

const updatedBooks=(book)=>{
    return async(dispatch)=>{
        const {id,name,thumbnail,author,price,featured,rating}=book;
        const response=await fetch(`http://localhost:9000/books/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                id,
                name,
                author,
                thumbnail,
                price,
                rating,
                featured
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const books=await response.json();

        //console.log("UPdatedBook:",books);
        dispatch(updatedProduct(books));
    }
}
export default updatedBooks;