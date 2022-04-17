
import { useEffect, useState } from "react"
import getCharacters from "../services/getResidentContainer"
import LocationInfo from "./LocationInfo"
import '../styles/Container_card.css'

const Characters  = ({name,img}) => {

const [names,setNames] = useState('')
const [imgResidents,setImgResidents] = useState('')
const [locationName, setLocationName] = useState('')
const [status, setStatus] = useState('')
const [origin, setOrigin] = useState('')
const [episode, setEpisode] = useState([])

useEffect ( () => {
    getCharacters(name,img)
        .then(res =>{
            
            setLocationName(res.data.location.name)
            setNames(res.data.name)
            setImgResidents(res.data.image)
            setStatus(res.data.status)
            setOrigin(res.data.origin.name)
            setEpisode(res.data.episode)
            
        })
},[name,img])




    return(
        <div className="container-card">
            <h2>{names}</h2>
            <img src={imgResidents} alt="" />
            <h5>Status: {status}</h5>
            <h5>Origin: {origin}</h5>
            <h5>Episodios: {episode.length}</h5>
            <LocationInfo location={locationName}/>
            
        </div>
    )
}

export default Characters