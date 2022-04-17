import { useEffect, useState } from "react"
import getLocation from "../services/getLocation"
import Characters from "./ResidentInfo"
import SearchBox from "./SearchBox"
import Loading from "./Loading"
import '../styles/Container_card.css'
import '../styles/Characters.css'
import '../styles/Container_card.css'


const LocationContainer = () => {
     


    

    const [residentes,setResidentes] = useState([])
    const [searchValue,setSearchValue] = useState('Citadel of Ricks')

    useEffect  ( () => {
        getLocation(searchValue)
          .then(res => {
            setResidentes(res.data.results[0].residents)
          })
          .catch(error => {
            console.error(error)
          })
    },[searchValue])

    
    

   
    

    const cant= residentes.length
    let list = residentes.map( (resident) => <Characters name={resident} key={resident} />)
    
    
  
    
    return(
        
        
        <div >
            
            <SearchBox handlerSearch={setSearchValue} />
            
            <p>Population: {cant}</p>
            
            <div className='container_characters'>

            {cant > 0 ? list:<Loading/>} 

            </div>
            
        </div>
    )

}


export default LocationContainer