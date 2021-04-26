import React from "react";
import Pet from "./Pet"

const Client = ({name, pets}) =>{
    return (
<div>
    <p>{name}</p>
    
        {pets ? pets.map(pet=> <Pet pet={pet}/>) : null}
  
</div>
    )
}

export default Client