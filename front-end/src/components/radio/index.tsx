import React,{
    useEffect,
    useRef,
    useState
  } from 'react'
  import { useField } from "@unform/core";
  import {Radiounit} from './styles'

interface RadioProps {
    name: string;
    values: string[];
}

const Radio: React.FC<RadioProps>= ({name, values}) => {
    const radioRef = useRef<HTMLInputElement>(null);
    const [radioValue, setRadioValue] = useState('')
    

    const { fieldName, defaultValue, error, registerField } = useField(name);
  
  
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: radioRef.current,
        path: "value",
      });
    }, [fieldName, registerField]);

    return (
        <>
           {values && values.map(value=>{
               return(
               <Radiounit key={value}>
               <input onChange={(e)=>setRadioValue(e.target.value)} type="radio" value={value} name={name} />
               <span>{value}</span>
               </Radiounit>
               )
           })}
           <input ref={radioRef} type="hidden" name={name} value={radioValue}/>
        </>
    )
}
export default Radio