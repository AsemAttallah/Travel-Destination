import './Tours.css';

function Tours (props){
    let url = props.TourImage;
    return(
        <div class="Tours">
            <p>{props.TourName}</p>
            <img class="ToursImage" src={url} alt=" Tour Image"/>
        </div>
    )
}

export default Tours;