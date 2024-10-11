import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import CommitteesHeader from "./Committees_Header";
import Team from "../pages/Team";
import Sponser from "../pages/Sponser";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      {/* <CommitteesHeader /> */}
      {/* <Team/> */}
      <Footer/>
    </>
  );
}

export default HomePage;
