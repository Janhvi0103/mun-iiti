import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import CommitteesHeader from "./Committees_Header";
import Team from "../pages/Team";
import Sponser from "../pages/Sponser";
import TextSection from "../components/TextSection";
import HomePageComponent from "./HomePageComponent";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      {/* <div className="overlay"> */}
      <HomePageComponent />
      {/* </div> */}
      <section>
      <TextSection />
      </section>
      <Footer/>
      {/* <CommitteesHeader /> */}
      {/* <Team/> */}
    </div>
  );
}

export default HomePage;
