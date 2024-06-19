import React, { useState } from "react";
import data from "./committee_data";
import * as Dialog from "@radix-ui/react-dialog";

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
    <div className="bg-gradient-to-b no-scrollbar from-slate-400 to-slate-300 overflow-x-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {data.map((ele, ind) => (
          <Dialog.Root key={ind}>
            <div
              className={`animate__animated animate__fadeInUp w-[70%]  m-[6vh] cursor-pointer border-b-4 border-spacing-16 border-b-blue-700`}
            >
              <Dialog.Trigger asChild>
                <div
                  onClick={handleOpen}
                  className="active:translate-x-[2vh] active:translate-y-[-2vh] active:bg-black active:bg-opacity-20 group h-full rounded-xl transition-all flex flex-col items-center justify-between py-2"
                >
                  <div className="group-active:brightness-200 ">
                    <img
                      height={"250px"}
                      width={"250px"}
                      src={ele.img}
                      className="mx-auto my-auto"
                    />
                  </div>

                  <div className="font-semibold text-sm lg:text-lg transition-all  group-hover:shadow-xl group-hover:bg-opacity-90 text-[#1976D1] bg-blue-200 rounded-xl md:text-xl lg:px-5 px-3 bg-opacity-65 py-1 mt-8 mb-4 mx-auto">
                    {ele.name}
                  </div>
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] transition-all  bg-gradient-to-br from-blue-300 to-blue-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] animate__animated rounded-xl animate__zoomInRight">
                  <Dialog.Title className="m-0 text-md md:text-2xl underline decoration-blue-600 underline-offset-8 font-semibold">
                    {ele.name}
                    <div
                      className={`
                        float-right
                      ${
                        ele.type === "offline"
                          ? "bg-green-600"
                          : "bg-orange-600"
                      }
                      capitalize
                      inline-block
                      bg-opacity-90
                      text-sm
                      tracking-wide
                      mt-2
                      text-gray-200 rounded xl px-2 pb-1 pt-0.5
                      ${delayedOpen ? "animate-pulse" : "animate-none"} 
                      `}
                    >
                      &#x25cf;
                      &nbsp; {ele.type}
                    </div>
                  </Dialog.Title>
                  <Dialog.Description className="mt-[20px] mb-5 text-[15px] text-base md:text-md font-semibold">
                                      
                    {ele.desc}
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button className="bg-red-600 bg-opacity-75 text-white hover:bg-red-600 outline-none px-[2vh] py-1 font-semibold rounded-2xl  transition-all float-right active:brightness-200">
                      Close &nbsp; &#10005;
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </div>
          </Dialog.Root>
        ))}
      </div>
      <div className="h-[5vh] lg:h-[20vh]">
{/* blank div */}
      </div>
    </div>
  );
}
