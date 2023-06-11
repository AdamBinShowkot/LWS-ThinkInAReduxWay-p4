import { Fragment } from "react"
import { useDispatch,useSelector } from "react-redux";
import { filterChange } from "../../../redux/filters/action";

const Filtered=()=>{
    const filtered=useSelector((state)=>state.filter.filtered);
    const dispatch=useDispatch();

    const handleFilterValue=(value)=>{
        dispatch(filterChange(value));
    }
    return(
        <Fragment>
            <h4 className="mt-2 text-xl font-bold">Book List</h4>
            <div className="flex items-center space-x-4">
                <button 
                className={`filter-btn ${filtered==="All"?"active-filter":""}`}
                id="lws-filterAll"
                onClick={()=>handleFilterValue("All")}
                >
                    All
                </button>
                <button 
                className={`filter-btn ${filtered==="Featured"?"active-filter":""}`}
                id="lws-filterFeatured"
                onClick={()=>handleFilterValue("Featured")}
                >
                    Featured
                </button>
            </div>
        </Fragment>
    )
}
export default Filtered;