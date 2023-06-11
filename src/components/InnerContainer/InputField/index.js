import { Fragment } from "react";

const InputField=({fieldData})=>{
    const {id,label,name,type,min,max,value,setValue}=fieldData;

    const handleInputChange=(e)=>{
        if(type==="text" || type==="number"){
            const {name,value}=e.target;

            setValue((state)=>{
                return{
                    ...state,
                    [name]:value
                }
            })
        }else{
            const {name,checked}=e.target;

            setValue((state)=>{
                return{
                    ...state,
                    [name]:checked
                }
            })
        }
    }
    return(
        <Fragment>
            {
                type==="text" || type==="number"?(
                    <>
                        <label htmlFor={id?id:""}>{label?label:""}</label>
                        <input 
                        onChange={handleInputChange}
                        required
                        min={min?min:""}
                        max={max?max:""} 
                        className="text-input"
                        type={type?type:""} 
                        id={id?id:""} 
                        value={value?value:""}
                        name={name} />
                    </>
                ):(
                    <>
                        <input 
                        id={id?id:""} 
                        type={type?type:""} 
                        name={name?name:""} 
                        className="w-4 h-4"
                        checked={value?value:""}
                        onChange={handleInputChange}
                        />
                        <label 
                        htmlFor={id?id:""} 
                        className="ml-2 text-sm"> 
                            {label?label:""} 
                        </label>
                    </>
                )
            }
        </Fragment>
    )
}
export default InputField;