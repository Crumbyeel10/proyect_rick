import { useState } from "react"
import Loading from "./Loading"
import '../styles/Search.css'

const SearchBox = ({handlerSearch,res}) => {

    const [estado,setEstado] = useState(false)
    const [inputValue,setInputValue] = useState('')
    // const [resett,setResett] = useState(0)
    
    const cambiarEstado = () => {
        setEstado(true)
        setTimeout(() => {
          setEstado(false)
        },5000)
  
    }

    if(estado){
        return <Loading/>
    }else{
    return(
        
        <div className="search_container">
            
             <input type="text" onChange={(e) => {
                 setInputValue(e.target.value)
             }} /> <br></br>
             {/* <label htmlFor="search-position" ></label> */}
             <button onClick={() =>  {handlerSearch(inputValue)
             cambiarEstado()
             } }>Buscar Ubicacion</button>

        </div>
        
    )
            }

}


export default SearchBox