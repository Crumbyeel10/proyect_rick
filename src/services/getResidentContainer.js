import axios from 'axios'


const getCharacters = async (characters) => {
    const req = await axios.get(characters)
    return req
}

export default getCharacters