import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import CommitteesHeader from "./Committees_Header";

function HomePage() {
  return (
    <>
      <NavBar />
      <CommitteesHeader />
    </>
  );
}

export default HomePage;
