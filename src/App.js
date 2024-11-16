<<<<<<< HEAD
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
=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sponser from "./pages/Sponser";
import Team from "./pages/Team";
import Committees from "./components/Committees";
import Past from "./App_past";
>>>>>>> 73d8f2e ( merged Past Edition Page)
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sponsors' element={<Sponser/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/committees' element={<Committees/>}/>
=======
          <Route path="/" element={<HomePage />} />
          <Route path="/sponsors" element={<Sponser />} />
          <Route path="/team" element={<Team />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/past-edition" element={<Past />} />
>>>>>>> 73d8f2e ( merged Past Edition Page)
        </Routes>
      </Router>
    </div>
  );
}

export default App;
