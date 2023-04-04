import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
const toursData = require('./data/db.json');

function App() {
  return (
    <>
    <div class="all"> 
    </div>
    <Routes>
      <Route path="/" element={<Home data={toursData} />} />
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
    </>
  );
}

export default App;
