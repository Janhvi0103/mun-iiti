// import './App.css';
import Cards from '../components/Cards'
import FaqCard from '../components/FaqCard'
import conf2 from '../components/conf2.json';
import Glimpse2 from '../components/Glimpse2';
import Glimpse from '../components/Glimpse';
import Letter from '../components/Letter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function About() {
  return (
         <>
         <div className='bg-grad'>
          <NavBar />
          <Glimpse/>
          {/* <Glimpse/>
          <Glimpse/>
          <Glimpse/> */}
          <Letter/>
          <Cards config={conf2}/>
          <FaqCard />
          <Footer/>
         </div>
         </>
  );
}

export default About;