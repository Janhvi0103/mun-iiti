import NavBar from "./NavBar";
import React from "react";
import HomePageComponent from "./HomePageComponent";
import TextSection from "../components/TextSection";
import Footer from "./Footer";

function HomePage() {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    padding: '0 20px', 
    boxSizing: 'border-box'
  };

  const textSectionStyle = {
    maxWidth: '1200px', 
    width: '100%',
    textAlign: 'center', // Optional: If you want the text inside to be centered
  };

  return (
    <div>
      <NavBar />
      <HomePageComponent />
      <section style={sectionStyle}>
        <div style={textSectionStyle}>
          <TextSection />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
