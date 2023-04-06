import './NavBar.css'
import {Link} from 'react-router-dom';

function NavBar (){
    return(
        <>
        <nav class="nav">
            <h1>Tour Destination</h1>
            <Link to="/"><span>home</span></Link>
        </nav>

        </>
    )
}

export default NavBar;