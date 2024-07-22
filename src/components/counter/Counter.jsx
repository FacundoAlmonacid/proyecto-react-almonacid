import { Button } from "@mui/material"


export const Counter = ({restar,contador,sumar,onAdd}) => {
  return (
    <div 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"1rem" 

        }}>
<Button variant="contained" onClick={restar}>
restar
</Button>
<h3>{contador}</h3>

<Button variant="contained" onClick={sumar}>
   sumar 
</Button>

<Button variant="outline" onClick={()=>onAdd(contador)}>
    Agregar al carrito
</Button>

    </div>
  )
}

 