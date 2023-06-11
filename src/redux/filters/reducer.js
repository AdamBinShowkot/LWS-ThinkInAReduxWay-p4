import {
    SEARCHCHANGE,
    FILTERCHANGE
} from './actionTypes';


const initialState={
    searchValue:"",
    filtered:"All"
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FILTERCHANGE:
            return{
                ...state,
                filtered:action.payload
            }
        case SEARCHCHANGE:
            return{
                ...state,
                searchValue:action.payload
            }
        default:
            return state;
    }
}
export default reducer;