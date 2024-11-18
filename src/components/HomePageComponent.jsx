import React from "react";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

const background  = require('../assets/Background_HomePage/MUNHome.jpg');
const Logo = require('../assets/committees/mun_b.png');

function HomePageComponent() {
    {
        const divStyle = {
            width: '100vw',
            height: '100vh', 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          };

          const overlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.65)', 
            zIndex: 1, 
        };
        const contentContainerStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the container on the page
            display: 'flex',
            // flexDirection: 'column', // Stack logo and text vertically
            alignItems: 'center',    // Align content (logo and text) horizontally to the center
            justifyContent: 'center',
            zIndex: 3, // Ensure it stays above the overlay
        };

        const textColumnStyle = {
            display: 'flex',
            flexDirection: 'column', // Arrange text vertically
        };

        const LogoStyle = {
            width: '200px', // Adjust the width of the small image
            height: '200px', // Adjust the height of the small image
            marginRight: '20px',
        };

        const verticalLineStyle = {
            width: '4px',   // Thickness of the line
            height: '180px', // Height of the line
            backgroundColor: 'white', // Line color
            margin: '0 30px', // Space around the line
        };

        const textStyle1 = {
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            fontSize: '60px',
            color: 'white',
            flexDirection : 'column',
            textAlign: 'center',
            marginLeft: '20px',
            marginBottom:'0px',
        };
        const textStyle2 = {
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            fontSize: '20px',
            color: 'white',
            flexDirection : 'column',
            textAlign: 'center',
            marginLeft: '20px',
        };

        const yearStyle = {
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            fontSize: '90px',
            color: 'white',
            flexDirection : 'column',
            textAlign: 'center',
            marginLeft: '20px',
            marginBottom:'0px',
            marginTop: '0px',
        }

    return(
        <div className="cComponent" style={divStyle}>
            <div style={overlayStyle}></div>
               {/* <NavBar />   */}
                 <div style={contentContainerStyle}>
                 <img  src = {Logo} style={LogoStyle}/>
                 <div style={verticalLineStyle}></div>
                    <div style={textColumnStyle}>
                       <h1 style={textStyle1}>IITI MUN</h1>
                       <h1 style ={yearStyle}> 2024</h1>
                       <h1 style={textStyle2}>Diplomacy. Debate. Deliver</h1>
                    </div>
                 </div>
        </div>
 );
     }
     
}
export default HomePageComponent;