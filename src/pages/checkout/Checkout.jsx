import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({nombre:"",email:"",telefono:""});

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("se envio form");
    console.log(user)
    
   ;
  };

  const handleChange = (event) => {
 
  let {name,value}=event.target

     setUser({...user,[name]:value})

  };

 




   
  return (
    <div>
      <h1>aca formulario</h1>

      <form onSubmit={envioDeFormulario}>

        <input type="text" 
        placeholder="nombre" 
        onChange={handleChange}
        name="nombre" />

        <input type="text" 
        placeholder="email" 
        onChange={handleChange}
        name="email"/>

        <input type="text" 
        placeholder="teléfono" 
        onChange={handleChange}
        name="telefono"/>


        <button>Enviar</button>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
