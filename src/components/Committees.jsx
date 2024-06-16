import React, { useState } from "react";
import data from "./committee_data";
import * as Dialog from "@radix-ui/react-dialog";

export default function Committees() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div className="bg-gradient-to-b w-[100vw] from-slate-400 to-slate-300 overflow-x-hidden ">
      <div className="flex justify-center items-center flex-wrap">
        {data.map((ele, ind) => (
          <Dialog.Root>
            <div className="animate__animated animate__fadeInUp h-[45vh] w-[25vw] m-[6vh] cursor-pointer" key={ind}>
              <Dialog.Trigger asChild>
                <div
                  onClick={handleOpen}
                  className="active:translate-x-[2vh] active:translate-y-[-2vh] active:bg-black active:bg-opacity-20 
                  group
                  rounded-xl transition-all flex-col items-center justify-center py-4 "
                >
                    <img
                    height={"220px"}
                    width={"220px"}
                    src={ele.img}
                    className={`active:invert mx-auto  ${ind == 1 ? "my-12" : "my-6"} `}
                  />
                  
                  <div className="font-bold transition-all group-hover:shadow-xl text-[#1976D1] bg-blue-200 rounded-xl  md:text-xl lg:w-[35%] my-4 py-1 mx-auto">
                    {ele.name}
                  </div>
                </div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] transition-all rounded-[6px] bg-gradient-to-br from-blue-300 to-blue-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] animate__animated animate__zoomInRight">
                  <Dialog.Title className=" m-0 text-md md:text-2xl underline underline-offset-8 font-semibold active:invert">
                    {ele.name}
                  </Dialog.Title>
                  <Dialog.Description className=" mt-[20px] mb-5 text-[15px] text-base md:text-md font-semibold">
                    {ele.desc}
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 outline-none px-[2vh] py-1 font-semibold rounded-2xl active:invert transition-all float-right">
                      Close &nbsp; &#10005;
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </div>
          </Dialog.Root>
        ))}
      </div>
    </div>
  );
}
