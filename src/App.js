import './App.css';
import Home from './components/home/Home';
const toursData = require('./data/db.json');


function App() {
  return (
    <div class="all"> 
    <Home data={toursData}/>
    </div>
  );
}

export default App;
