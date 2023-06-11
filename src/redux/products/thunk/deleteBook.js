import { deleteProduct } from "../action";

const deleteBooks=(bookId)=>{
    return async(dispatch)=>{
        await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "DELETE",
        });

        dispatch(deleteProduct(bookId));
    }
}
export default deleteBooks;