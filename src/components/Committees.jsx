import React, { useState } from "react";
import data from "./committee_data";
import * as Dialog from "@radix-ui/react-dialog";
import NavBar from "./NavBar";
import Footer from "./Footer";
import bg from "../assets/committees/bg1.jpg";

export default function Committees() {
  const [open, setOpen] = useState(false);
  const [delayedOpen, setdelayedOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setdelayedOpen(false);
    }, 4000);
    setdelayedOpen(true);
  };

  return (
    <>
      <NavBar />
      {/* Background section with dark overlay */}
      <div
        className="relative h-[155vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 no-scrollbar overflow-x-hidden h-full flex flex-col items-center justify-center text-white">
          <div className="relative w-[80vw] h-[80vh] mx-auto flex justify-center items-center top-[0vh]">
            {/* Centered Title */}
            <h1 className="absolute text-3xl lg:text-5xl font-bold text-green-700">
              COMMITTEES
            </h1>

            {data.map((ele, ind) => {
              const angle = (360 / data.length) * ind;
              return (
                <Dialog.Root key={ind}>
                  <div
                    className="absolute transform transition-all z-0" // set lower z-index for images
                    style={{
                      transform: `rotate(${angle}deg) translate(0, -50vh) rotate(-${angle}deg)`,
                    }}
                  >
                    <Dialog.Trigger asChild>
                      <div
                        onClick={handleOpen}
                        className="active:translate-x-[2vh] active:translate-y-[-2vh] group w-[80%] cursor-pointer h-full rounded-xl transition-all flex flex-col items-center justify-between py-2 gap-10"
                      >
                        <div className="group-active:brightness-200">
                          <img
                            height={"300px"}
                            width={"300px"}
                            src={ele.img}
                            className="mx-auto my-auto"
                          />
                        </div>
                      </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="" />
                      <Dialog.Content
                        className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] transition-all bg-gradient-to-br from-blue-300 to-blue-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] animate__animated rounded-xl animate__zoomInRight z-20" // set high z-index for dialog
                      >
                        <Dialog.Title className="m-0 text-md md:text-2xl underline decoration-blue-600 underline-offset-8 font-semibold">
                          {ele.name}
                          <div
                            className={`float-right ${
                              ele.type === "offline"
                                ? "bg-green-600"
                                : "bg-orange-600"
                            } capitalize inline-block bg-opacity-90 text-sm tracking-wide mt-2 text-gray-200 rounded xl px-2 pb-1 pt-0.5 ${
                              delayedOpen ? "animate-pulse" : "animate-none"
                            }`}
                          >
                            &#x25cf;&nbsp; {ele.type}
                          </div>
                        </Dialog.Title>
                        <Dialog.Description className="mt-[20px] mb-5 text-[15px] text-base md:text-md font-semibold">
                          {ele.desc}
                        </Dialog.Description>
                        <Dialog.Close asChild>
                          <button className="bg-red-600 bg-opacity-75 text-white hover:bg-red-600 outline-none px-[2vh] py-1 font-semibold rounded-2xl transition-all float-right active:brightness-200">
                            Close &nbsp; &#10005;
                          </button>
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </div>
                </Dialog.Root>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
