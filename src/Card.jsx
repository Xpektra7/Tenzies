/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
export default function Card(props) {
    const [isheld, setIsheld] = useState(false);
    useEffect(() => {
        if(props.pool.length < 1){
            setIsheld(false);
        }    
    },[props.pool.length])
    function hold(){
        if(isheld === false){
            if(props.pool.length < 1){
                props.setPool([props.value]);
                setIsheld(true);
            }
            else if(props.pool.length > 0 && props.pool[0] === props.value){
                props.setPool(prev => [...prev,props.value]);
                setIsheld(true);
            }
        }

    }

    return(
      <button className={isheld ? "heldcard" :"card"} onClick={hold}>
        {isheld ? props.pool[0] : props.value}
      </button>
    );
  }
  