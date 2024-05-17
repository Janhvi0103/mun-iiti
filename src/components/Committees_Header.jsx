import NavBar from "./NavBar";
import headImg from "../assets/committees/committees_header.jpg"
import mun from "../assets/committees/mun_b.png"
import '../index.css';

export default function Committees(){
    return (
        <>
            {/* <NavBar/> */}
            <div className="w-[100vw] h-[40vh]">
                <img src={headImg} alt="head" className="h-[100%] w-full bg-center brightness-50 object-cover" />
                <div id="heading" className="absolute left-[23vw] shadow-3xl font-semibold brightness-105 text-white top-[25vh] text-7xl">COMMITTEES 2024</div>
                <img src={mun} alt="mun-logo" className="h-[28%] absolute left-[68vw] top-[17vh]"/>
                <div id="comm" className="absolute p-5 left-[3vw] backdrop-blur-md top-[51vh] border border-white rounded-xl">
                    <Committees/>
                </div>
            </div>
        </>
    )
}