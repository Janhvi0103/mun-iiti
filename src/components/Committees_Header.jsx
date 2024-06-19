import NavBar from "./NavBar";
import headImg from "../assets/committees/committees_header.jpg"
import mun from "../assets/committees/mun_b.png"
import '../index.css';
import Committees from "./Committees";
import { useState } from "react";

export default function CommitteesHeader(){
    return (
        <>
            <div className="w-[100vw] no-scrollbar overflow-x-hidden overflow-y-hidden relative h-[50vh]">
                <img src={headImg} alt="head" className="h-[100%] w-full bg-center brightness-50 object-cover " />
                <div className="absolute animate__animated animate__fadeInRight md:top-[11vh] top-[8vh] md:left-[5vh] left-[1vh] lg:left-[25vh] w-[90%]">
                    <div id="heading" className="shadow-3xl font-semibold brightness-105 text-white text-4xl lg:text-7xl inline">COMMITTEES 2024</div>
                    <img src={mun} alt="mun-logo" className="lg:w-[180px] w-[95px] inline mx-14 my-4 sm:my-0"/>
                </div>
                
            </div>
            <Committees/>
        </>
    )
}