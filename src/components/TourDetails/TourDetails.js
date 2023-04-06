import './TourDetails.css';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
const data =require('../../data/db');




// function TourDetails (){
//     let {id} =useParams()
//     return(
//         <h1>{id}</h1>
//     )
// }
function TourDetails (){
    let {id} =useParams()
    const [readMore,setReadMore]=useState(false);

    function showHandler(){
        setReadMore(!readMore)
      }

    return(
        <>
        {  
            data.map(element => {
                if(element.id===id){
                return(
                    <div class="tourDetail">
                    
                        <h2>{element.name}</h2>
                        <img class="tourDetailImage" src={element.image} alt={element.name}/>
                        <p>Price : {element.price} $</p>
                        
                        <div>
                            {
                            readMore? <>
                            <p>{element.info}</p> 
                            <button  onClick= {showHandler}>show less</button> 
                            </>
                            :
                            <>
                            <p>{(element.info).substring(0,200)}</p>
                            <button  onClick= {showHandler}>show more</button> 
                            </>
                            }
                        </div>
                   
                    </div>
                    
                )
            }
             
          })
          
          }



          </>
    )
   
    
}

export default TourDetails;