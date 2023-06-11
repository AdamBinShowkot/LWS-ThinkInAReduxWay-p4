import { Fragment, useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import BooksForm from "./InputField";
import BookLists from "./BookLists";
import Filtered from "./Filtered";
import InputField from "./InputField";
import fetchProducts from "../../redux/products/thunk/fetchProducts";
import addNewProducts from "../../redux/products/thunk/addNewProducts";
import updatedBooks from "../../redux/products/thunk/updatedBook";

const InnerContainer=()=>{
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.product.products);
    const filtereds=useSelector((state)=>state.filter);

    const [newBooks,setNewBooks]=useState({
        id:"",
        name:"",
        author:"",
        thumbnail:"",
        price:"",
        rating:"",
        featured:false
    });

    const handleTestChange=(e)=>{
        console.log(e.target.name,e.target.checked);
    }

    useEffect(()=>{
        dispatch(fetchProducts);
    },[])

    const handleAddNewProducts=(e)=>{
        e.preventDefault();
        let {id}=newBooks;
        if(id){
            dispatch(updatedBooks(newBooks));
        }else{
            dispatch(addNewProducts(newBooks));
        }
        setNewBooks({
            id:"",
            name:"",
            author:"",
            thumbnail:"",
            price:"",
            rating:"",
            featured:false
        })
       // console.log(newBooks);
    }
    const handleUpdateButton=(book)=>{
       // console.log(book);
        const {id,name,thumbnail,rating,price,featured,author}=book;

        setNewBooks({          
            id,
            name,
            thumbnail,
            price,
            rating,
            featured,
            author
        })
    }
    //console.log("New",newBooks)
    const {filtered,searchValue}=filtereds;
    return(
        <Fragment>
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div className="order-2 xl:-order-1">
                    <div className="flex items-center justify-between mb-12">
                        <Filtered/>
                    </div>
                    <div className="lws-bookContainer">
                       {
                        products.length?products.filter((book)=>{
                            if(searchValue){
                               let searchResult;
                               try{
                                searchResult=book.name.toUpperCase().search(searchValue.toUpperCase());
                               }catch{

                               }
                                if(searchResult<0){
                                    return false;
                                }else{
                                    return true;
                                }
                            }else{
                                return true;
                            }
                        }).
                        filter((book)=>{
                            if(filtered==="All"){
                                return true;
                            }else if(filtered==="Featured"){
                                return book.featured;
                            }
                        }).map((product)=>{
                            return  <BookLists 
                            handleUpdateButton={handleUpdateButton} 
                            bookInfos={product} 
                            key={product.id}
                            />
                        }):(<h2>No Books Available.</h2>)
                       }
                    </div>
                </div>
                <div>
                <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                    <h4 className="mb-8 text-xl font-bold text-center">{newBooks.id?"Update Book":"Add New Book"}</h4>
                    <form onSubmit={handleAddNewProducts} className="book-form">
                        <div className="space-y-2">
                            <InputField
                            fieldData={{
                                id:"input-Bookname",
                                name:"name",
                                type:"text",
                                label:"Book Name",
                                value:newBooks.name,
                                setValue:setNewBooks
                            }}
                            />
                        </div>

                        <div className="space-y-2">
                            <InputField
                            fieldData={{
                                id:"input-Bookauthor",
                                name:"author",
                                type:"text",
                                label:"Author",
                                value:newBooks.author,
                                setValue:setNewBooks
                            }}
                            />
                        </div>

                        <div className="space-y-2">
                            <InputField
                            fieldData={{
                                id:"input-Bookthumbnail",
                                name:"thumbnail",
                                type:"text",
                                label:"Image Url",
                                value:newBooks.thumbnail,
                                setValue:setNewBooks
                            }}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 pb-4">
                            <div className="space-y-2">
                                <InputField
                                fieldData={{
                                    id:"input-Bookprice",
                                    name:"price",
                                    type:"number",
                                    label:"Price",
                                    value:newBooks.price,
                                    setValue:setNewBooks
                                }}
                                />
                            </div>

                            <div className="space-y-2">
                                <InputField
                                fieldData={{
                                    id:"input-Bookrating",
                                    name:"rating",
                                    type:"number",
                                    label:"Rating",
                                    value:newBooks.rating,
                                    min:"1",
                                    max:"5",
                                    setValue:setNewBooks
                                }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <InputField
                            fieldData={{
                                id:"input-Bookfeatured",
                                name:"featured",
                                type:"checkbox",
                                label:"This is a featured book",
                                value:newBooks.featured,
                                setValue:setNewBooks
                            }}
                            />
                        </div>

                        <button 
                        type="submit"
                        className="submit" 
                        id="submit">
                            {
                                newBooks.id?"Update Book":"Add Book"
                            }
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default InnerContainer;