import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Loading.css'

const  Loading = () => {
    return(
        <div className='divpadre' >
            <div className='divhijo'>

            <Spinner color='danger'/>

            </div>
            
        </div>
    )
}

export default Loading