import {
    ADDED,
    LOADED,
    DELETED,
    UPDATED
} from './actionTypes';

const initialState={
    products:[]
}

const getMaxId=(states)=>{
    let maxId;
    if(states.length){
        maxId=states.reduce((accum,current)=>Math.max(accum,current.id),0);
    }else{
        maxId=0;
    }
    return maxId+1;
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDED:
            const {name,author,thumbnail,price,rating,featured}=action.payload;
            return{
                ...state,
                products:[
                    ...state.products,
                    {
                        id:getMaxId(state.products),
                        name,
                        thumbnail,
                        author,
                        price,
                        rating,
                        featured
                    }
                ]
            }
        case UPDATED:
            const {books}=action.payload;
            return{
                ...state,
                products:state.products.map((book)=>{
                    if(book.id===books.id){
                        return{
                            ...book,
                            id:books.id,
                            name:books.name,
                            author:books.author,
                            price:books.price,
                            rating:books.rating,
                            thumbnail:books.thumbnail,
                            featured:books.featured
                        }
                    }else{
                        return{
                            ...book
                        }
                    }
                })
            }
        case LOADED:
            return{
                ...state,
                products:action.payload
            }
        case DELETED:
            return{
                ...state,
                products:state.products.filter((product)=>product.id!==action.payload)
            }
        default:
            return state;
    }
}
export default reducer;