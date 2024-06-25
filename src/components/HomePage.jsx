import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import CommitteesHeader from "./Committees_Header";
import Team from "../pages/Team";

function HomePage() {
  return (
    <>
      <NavBar />
      {/* <CommitteesHeader /> */}
      <Team/>
    </>
  );
}

export default HomePage;
