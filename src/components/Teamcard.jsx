import React from 'react'
import  "../css/team.css"
import { FaLinkedin,FaInstagram } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "react-icons/fa"


const PeopleCard = (props) => {
  

    // const isMediumScreen = useMediaQuery({ query: '(min-width: 550px) and (max-width: 992px)' });
    return (
        <>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/> */}
           
            <div className="card" style={{ backgroundImage: `url(${props.pic})` }}>
        <b></b>
        <div className="content">
          <p className="title">{props.name}<br/><span>{props.position}</span></p>
          <ul className="sci">
            {/* <li>
              <a className='anchorlink' href="#">
                <svg className="fa-brands fa-facebook" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
              </a>
            </li> */}
      
            {/* <li>
              <a className='anchorlink' href={props.GitHub}>
              <i style={{scale:"1.5"}}  className="fab fa-github fa-brands"></i>
              </a>
            </li>
      
            <li>
              <a className='anchorlink' href={props.linkedin}>
                <svg className="fa-brands fa-linkedin-in" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </a>
            </li>
      
            <li>
              <a className='anchorlink' href={props.insta}>
                <svg className="fa-brands fa-instagram" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
        </>
    )
}

export default PeopleCard;

