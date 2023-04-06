import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';

const toursData = require('./data/db.json');

function App() {
  return (
    <>
       <div>
        <NavBar />
      </div>
    <div class="all"> 
    <Routes>
      <Route path="/" element={<Home data={toursData} />} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    </div>

    </>
  );
}

export default App;
