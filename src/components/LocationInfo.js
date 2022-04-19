
import { useEffect, useState } from "react"
import getLocation from "../services/getLocation"




const LocationInfo = ({location}) => {

    const [locationName, setLocationName] = useState('')
    const [typeLocation, setTypeLocation] = useState('')
    const [dimension, setDimension] = useState('')
   
    useEffect (() => {
        getLocation(location)
            .then(res => {
                setLocationName(res.data.results[0].name)
                setTypeLocation(res.data.results[0].type)
                setDimension(res.data.results[0].dimension)
                
            })
            .catch(error => {
                console.error(error)
            })
    },[location])


    return(
        <div className="container-location">
            <h5>Location: {locationName}</h5>
            <h5>Type: {typeLocation}</h5>
            <h5>Dimension: {dimension}</h5>
        </div>
    )
}

export default LocationInfo