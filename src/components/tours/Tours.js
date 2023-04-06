import './Tours.css';
import Tour from './tour/Tour';
import {Link} from 'react-router-dom';
function Tours (props){
    return(
       
        props.data.map(element => {
            return (
            <div key={element.id}>
              <Link to={`/city/${element.id}`}>
              <Tour TourName={element.name} TourImage={element.image} />
              </Link>
            </div>
            )
          })

        
    )

}


export default Tours;