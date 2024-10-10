import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sponser from './pages/Sponser';
import Team from './pages/Team';
import Committees from './components/Committees';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sponsers' element={<Sponser/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/committees' element={<Committees/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
