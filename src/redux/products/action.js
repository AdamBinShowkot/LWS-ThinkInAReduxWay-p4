import {
    ADDED,
    UPDATED,
    DELETED,
    LOADED
} from './actionTypes';

export const addNewProduct=(products)=>{
    return{
        type:ADDED,
        payload:products
    }
}

export const updatedProduct=(products)=>{
    return{
        type:UPDATED,
        payload:{
            books:products
        }
    }
}

export const deleteProduct=(productId)=>{
    return{
        type:DELETED,
        payload:productId
    }
}

export const loadedProducts=(products)=>{
    return{
        type:LOADED,
        payload:products
    }
}