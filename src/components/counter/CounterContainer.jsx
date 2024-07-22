import { useState } from "react"
import {Counter} from "./Counter"



const CounterContainer = ({onAdd ,stock,initialValue=1 }) => {

const[contador,setContador]=useState(initialValue )

const sumar= ()=>{
    if (contador<stock) {
           setContador(contador+1) 
    }else{
        alert("stock maximo permitido")
    }

}

const restar=()=>{
    if(contador>1){
       setContador(contador-1)
     
    }else{
        alert("Mínimo no disponible")
    }
}

  return <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd}/>
    
}

export default CounterContainer