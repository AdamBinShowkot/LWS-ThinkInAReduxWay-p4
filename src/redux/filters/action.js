import {
    SEARCHCHANGE,
    FILTERCHANGE
} from './actionTypes';

export const filterChange=(filterValue)=>{
    return{
        type:FILTERCHANGE,
        payload:filterValue
    }
}

export const searchChange=(searchValue)=>{
    return{
        type:SEARCHCHANGE,
        payload:searchValue
    }
}