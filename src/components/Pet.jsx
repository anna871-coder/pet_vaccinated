import {useState} from 'react'

const Pet =({pet})=> {
    const [vaccinated, setVaccinated] = useState(pet.isVaccinated)
    const [loading, setLoading] = useState(false)

    const changeVaccinated =()=> {
 setLoading(true);
    fetch("api/pets", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: pet.name, isVaccinated: !vaccinated})
    }).then(res=>setVaccinated(!vaccinated))
    .catch(err=>console.error(err))
   .finally(()=>setLoading(false))
  }
    return (
        <div>
            {pet.name} - Vaccinated <button onClick={changeVaccinated}>{loading ? "..." : vaccinated.toString()}</button>
        </div>
    )
}
export default Pet