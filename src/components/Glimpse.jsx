import React from 'react';
import headImg from "../assets/about/backabt.png"
import mun from "../assets/committees/mun_b.png"
export default function Glimpse() {
  const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {

        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, []);
  return (
    <>
        <div className="w-[100vw] no-scrollbar overflow-x-hidden overflow-y-hidden relative h-[50vh]">
        
        <img src={headImg} alt="head" className="h-[100%] w-full bg-center brightness-50 object-cover " />
        
        <div className="absolute animate__animated animate__fadeInRight md:top-[11vh] top-[8vh] md:left-[5vh] left-[1vh] lg:left-[25vh] w-[90%]">
        
            <div id="heading" className="shadow-3xl font-semibold brightness-105 text-white text-4xl lg:text-7xl inline">Welcome to MUN IITI 2024</div>
            <img src={mun} alt="mun-logo" className="lg:w-[180px] w-[95px] inline mx-14 my-4 sm:my-0"/>
        </div>
        
    </div>
    <div className="container  px-5" style={stylesg.container}>
    <div className="row mx-0">
        <div className="col-12 px-0">
      <h2 className="mb-4" style={stylesg.heading}>A Glimpse of MUN IITI</h2>
      <p style={stylesg.paragraph}>
        MUN IITI is going to be an extraordinary intellectual and social conference that brings together an amazing assortment of young minds from across India to engage in and gain first-hand experience of negotiating processes by playing the role of diplomats for a period of two days. At a personal level, this MUN endeavour will stretch the general knowledge & awareness of the participants while sensitising them to the challenging global issues and the intricate obstacles of being a global leader. Moreover, it will develop and enhance skills to negotiate, articulate and market ideas along with fostering critical and creative thought process to spontaneously come up with solutions to some grave world problems.
      </p>
      </div>
      </div>
    </div>
    </>
  );
}

const stylesg = {
  container: {
    margin: '20px auto', /* Added margin: 20px auto; for top/bottom and centering */
    background: 'linear-gradient(90deg, #01091E 64.92%, #133762 95.28%)',
    color: 'white',
    borderRadius: '30px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px', /* Added padding to maintain spacing */
    width: '100%'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
  }
};
