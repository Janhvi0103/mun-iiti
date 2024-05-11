import react from 'react';
import reactdom from 'react-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(){
    return(
        <header>
        <div className='nav-bar'>
           <a className='element'>Home</a>
           <a className='element'>About Us</a>
           <a className='element'>Apply</a>
           <a className='element'>Secretariat</a>
        </div>

        <div className="App-header">
          <h1>Welcome to MUN-IITI Homepage</h1>
        </div> 
        </header>
    )
}

export default NavBar;