import './Tour.css';
function Tour(props){
    let url = props.TourImage;
    return(
        <div class="Tours">
            <p>{props.TourName}</p>
            <img class="ToursImage" src={url} alt=" Tour Image"/>
        </div>
    )
}

export default Tour;