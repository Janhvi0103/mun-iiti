import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import headImg from "../assets/team/team_header.webp"
import mun from "../assets/committees/mun_b.png"
import '../index.css';
import NavBar from '../components/NavBar';
import TeamsData from "../data/teamdata.json"

import { useState,useEffect } from "react";
import Teamcard from "../components/Teamcard"
import { FaFacebook, FaTwitter } from 'react-icons/fa';
// import { SiIconName } from 'react-icons/si';
import "../css/team.css"


export default function Team(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {

        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, []);
    // const members=
    // [
    //     {
    //         Name:"Ayush Khadkekar"
    //     },
    //     {
    //         Name:"member 2"
    //     },
    //     {
    //         Name:"member 3"
    //     },
    //     {
    //         Name:"member 3"
    //     }
    // ];
    // const props1= {
    //     Professors:[],
    //     Team_Leaders : [],
    //     Marketing : [],
    //     Outreach : [],
    //     Technicals : [],
    //     ContentSocialMedia : [],
    //     Creatives : [],
    //     VideoProduction : [],
    //     OperationLogistic : [],
    //     Events : TeamsData.Events || []
    // };
  return (
    <>
    <div className="w-[100vw] no-scrollbar overflow-x-hidden overflow-y-hidden relative h-[50vh]">
        
                <img src={headImg} alt="head" className="h-[100%] w-full bg-center brightness-50 object-cover " />
                
                <div className="absolute animate__animated animate__fadeInRight md:top-[11vh] top-[8vh] md:left-[5vh] left-[1vh] lg:left-[25vh] w-[90%]">
                
                    <div id="heading" className="shadow-3xl font-semibold brightness-105 text-white text-4xl lg:text-7xl inline">SECRETARIAT 2024</div>
                    <img src={mun} alt="mun-logo" className="lg:w-[180px] w-[95px] inline mx-14 my-4 sm:my-0"/>
                </div>
                
            </div>

            <div className="intro">
              <div className="introcontent">The Secretariat is the dedicated team responsible for organizing every aspect of the conference, ensuring that delegates have the best Model UN experience. Our responsibilities begin with securing sponsorships, negotiating partnerships that provide essential financial support and resources. We manage all logistical details, including selecting and setting up venues, arranging transportation, and coordinating accommodations for attendees, ensuring a seamless and comfortable experience.Our team meticulously crafts the conference agenda, featuring diverse sessions, workshops, and keynote speakers to deliver educational and thought-provoking content. We provide comprehensive delegate support, addressing any inquiries or concerns before and during the conference to foster a welcoming and supportive environment.We excel in hospitality, organizing welcome receptions and special events to make guests feel valued and appreciated. </div>
            
            </div>
            
            


          <div className="teambg" style={{  }}>
        <div className='container mx-auto px-5 m-auto pb-20 pt-8'>

          <div className="header">
            {/* <h1><span className={Team.text_color}>Our</span><span className={Team.text_white}> Team</span></h1> */}
            <h1 style={{textAlign:"center"}} className='text-white text-center font-bold pt-10 text-4xl pb-3 headingteam'>THE GENERALS </h1>
          </div>

          <div className='grid md:grid-cols-2 sm:grid-cols-2 gap-12 lg:gap-20 py-12 lg:px-64 ml-6' >
            {TeamsData.Generals.map((item, i) => (
              <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={`${process.env.PUBLIC_URL}${item.Pic}`} mainWidth={'100%'} imageHeight={'42vh'} imageWidth={'100%'} textWidth={'100%'} isProfessor={true} position={item.Position} />
            ))}
          </div>

          <section >
            <div className="flex-row min-h-screen items-center justify-center ">
              <div className=" items-center justify-center ">

                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>THE CHIEFS</h1>

                <Swiper
                  // spaceBetween={10}
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-2 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>
                      {TeamsData.Chiefs.map((item, i) => (
                        <SwiperSlide>
                          <Teamcard position={item.Position} name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={process.env.PUBLIC_URL + item.Pic} isProfessor={true} imageHeight={'44vh'}/>
                        </SwiperSlide>
                      ))}
                    </section>
                  </div>
                      </Swiper>

                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>PUBLIC AFFAIRS </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-20  w-full '
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.PublicAffairs.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={process.env.PUBLIC_URL + item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>                                

                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>MARKETING </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.Marketing.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>



                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>FINANCE AFFAIRS </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.FinanceAffairs.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>                

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>INFORMATION SERVICES </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.InformationServices.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>DELEGATE AFFAIRS</h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.DelegateAffairs.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>EXECUTIVE BOARD</h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },

                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.ExecutiveBoard.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>VIDEO PRODUCTION</h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.VideoProduction.map((item, i) => (
                      <SwiperSlide>
                        <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>



                {/* intern Fair */}
                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20 headingteam'>CREATIVE AND SOCIAL MEDIA </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.Creatives.map((item, i) => (
                      <SwiperSlide>
                       <Teamcard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>




              </div>
            </div>
          </section>
        </div>
      </div>


    </>
  )
}
