import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import CommitteesHeader from "./Committees_Header";
import Team from "../pages/Team";
import Sponser from "../pages/Sponser";
import HomePageComponent from "./HomePageComponent";
import TextSection from "./TextSection";

function HomePage() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="overlay">
      <HomePageComponent />
      </div>
      <section>
      <TextSection />
      </section>
      
      {/* <CommitteesHeader /> */}
      {/* <Team/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
