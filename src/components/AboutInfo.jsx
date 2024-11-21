import React from "react";
import ReactDOM from "react-dom";

function AboutInfo(){
    return(
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0px",
        boxSizing: "border-box",
        marginTop: "40px"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "0px",fontFamily:"Trebuchet MS" }}>
        About Us
      </h2>
      <p style={{ maxWidth: "600px", textAlign: "justify" }}>
      MUN IITI is going to be an extraordinary intellectual and social conference that brings together an amazing assortment of young minds from across India to engage in and gain first-hand experience of negotiating processes by playing the role of diplomats for a period of two days. At a personal level, this MUN endeavour will stretch the general knowledge & awareness of the participants while sensitising them to the challenging global issues and the intricate obstacles of being a global leader. Moreover, it will develop and enhance skills to negotiate, articulate and market ideas along with fostering critical and creative thought process to spontaneously come up with solutions to some grave world problems.
      </p>
    </div>
    );
};

export default AboutInfo;