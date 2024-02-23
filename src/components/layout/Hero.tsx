import Navbar from "./Navbar";
import { useState} from "react";
import Button,{PrimaryButton,SecondaryButton} from "../ui/Button";

const Hero = ()=>{
  const [timer,setTimer] = useState({h:0,m:0,s:0})
  const deadline = "23 Feb 2024 10:30:20 UTC"
  const time = Date.parse(deadline) - Date.now()
  setTimeout(()=>{
      setTimer(()=>{
       return {
           h:Math.floor((time/(1000*60*60))%24)>0?Math.floor((time/(1000*60*60))%24):0,
           m:Math.floor((time/(1000*60))%60)>0?Math.floor((time/(1000*60))%60):0,
           s:Math.floor((time/(1000)%60))>0?Math.floor((time/(1000))%60):0
       }
      })
     },1000);
    return (
        <>
        <Navbar/>
        <marquee behavior="scroll" direction="left" className="bg-heavyGreen py-2 text-white font-bold text-sm">Last Winner: {"0xcc42724c6683b7e57334c4e856f4c9965ed682bd"} Previous Winnings: {"0.045"}MATIC</marquee>
        <div className="container mx-auto text-white flex flex-col space-y-3 py-2">
            <div className="flex items-center justify-center">
            <div className="p-4 flex flex-col space-y-1 border-white border text-center">
                <h3 className="font-bold text-md">Admin Control</h3>
                <p className="text-md">Total commission to be withdrawn {"0.005"}MATIC </p>
                <div className="flex space-x-2 p-2">
                   <div className=" w-1/4 border border-white flex flex-col p-2 items-center">
                   <ion-icon name="star"></ion-icon>
                   <h2>Draw Winner</h2>
                   </div>
                   <div className=" w-1/4 border border-white flex flex-col p-2 items-center">
                   <ion-icon name="information-circle-outline"></ion-icon>
                   <h2>Withdraw Commission</h2>
                   </div>
                   <div className=" w-1/4 border border-white flex flex-col p-2 items-center">
                   <ion-icon name="sync-outline"></ion-icon>
                   <h2>Restart Draw</h2>
                   </div>
                   <div className=" w-1/4 border border-white flex flex-col p-2 items-center">
                   <ion-icon name="refresh-outline"></ion-icon>
                   <h2>Refund All</h2>
                   </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0">
                   <div className="w-[100%] md:w-1/2 flex justify-center max-h-[22rem]">
                    <div className="border border-white flex flex-col p-3 space-y-5">
                    <h2 className="text-4xl font-bold text-center">The Next Draw</h2>
                    <div className="flex space-x-2">
                     <div className="w-1/2 border border-white p-2">
                        <h4 className="font-bold text-md">Total Pool</h4>
                        <p className="text-lg font-semibold">{"0.13"} MATIC</p>
                     </div>
                     <div className="w-1/2 border border-white p-2">
                        <h4 className="font-bold text-md">Tickets Remaining</h4>
                        <p className="text-lg font-semibold">{"87"}</p>
                     </div>
                    </div>
                    <div>
                    <h4 className="font-bold">Time Remaining</h4>
                    <div className="flex p-2 space-x-2">
                <div className="flex flex-col items-center  max-w-1/3">
                   <div className="bg-gradient-to-r from-lightGreen to-heavyGreen border border-white flex flex-col px-12 py-8 items-center">
                   <h2 className="text-4xl font-bold">{timer.h}</h2>
                   </div>
                   <h2 className="">Hours</h2>
                </div>
                <div className="flex flex-col items-center  max-w-1/3">
                   <div className="bg-gradient-to-r from-lightGreen to-heavyGreen border border-white flex flex-col px-12 py-8 items-center">
                   <h2 className="text-4xl font-bold">{timer.m}</h2>
                   </div>
                   <h2 className="">Minutes</h2>
                </div>
                <div className="flex flex-col items-center max-w-1/3">
                   <div className="bg-gradient-to-r from-lightGreen to-heavyGreen border border-white flex flex-col px-12 py-8 items-center">
                   <h2 className="text-4xl font-bold">{timer.s}</h2>
                   </div>
                   <h2 className="">Seconds</h2>
                </div>
                </div>
                    </div>
                
                    </div>
                   </div>
                   <div className="w-[100%] md:w-1/2 flex justify-center">
                 <div className="border min-w-[100%] border-white flex flex-col p-3 space-y-5">
                    <div className="flex flex-col space-y-3 border border-white p-2 shadow-sm shadow-white border-t-0">
                  <div className="flex justify-between">
                    <h2 className="font-bold text-sm">Price per Ticket</h2>
                    <p className="font-semibold text-md">{"0.01"} MATIC</p>
                  </div>
                  <div className="flex border border-white justify-between items-center p-2">
                    <h2 className="text-md uppercase">Tickets</h2>
                    <p className="text-sm font-bold">5</p>
                  </div>
                  <div className="flex flex-col space-y-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-md font-bold capitalize">total cost of tickets:</h2>
                    <p className="text-md font-bold">{0.05} MATIC</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold capitalize">service fees:</h2>
                    <p className="text-sm font-semibold">{0.01} MATIC</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold capitalize">network fees:</h2>
                    <p className="text-sm font-semibold">{0.0001}</p>
                  </div>
                  </div>
                  <PrimaryButton text="Buy 5 Ticket(5) for 0.05 MATIC"/>
                    </div>
                    <div className="flex flex-col space-y-3 border border-white p-2 shadow-sm shadow-lightGray">
                    <h2 className="font-bold text-sm capitalize">You have 8 tickets in this draw</h2>
                    <div className="grid grid-cols-7 gap-4">
                    <SecondaryButton text="1"/>
                    <SecondaryButton text="2"/>
                    <SecondaryButton text="3"/>
                    <SecondaryButton text="4"/>
                    <SecondaryButton text="5"/>
                    <SecondaryButton text="6"/>
                    <SecondaryButton text="7"/>
                    <SecondaryButton text="8"/>
                    </div>
                    </div>
                 </div>
                </div>
            </div>
             
        </div>
        </>
    )
}
export default Hero