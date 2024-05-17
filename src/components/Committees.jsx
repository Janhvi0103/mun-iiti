import NavBar from "./NavBar";
import headImg from "../assets/committees_header.jpg"
import '../index.css';

export default function Committees(){
    return (
        <>
            {/* <NavBar/> */}
            <div className="h-[85vh] w-[80vw]">
                <img src={headImg} alt="header" width="100%" height="100%" />
                <div className=" text-red-500 text-6xl">jjj</div>
            </div>
        </>
    )
}