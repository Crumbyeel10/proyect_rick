
import axios from 'axios'


const getLocation = async (location) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${location}`
    const req = await axios.get(url)
    return req
}

export default getLocation