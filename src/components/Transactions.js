import { Link } from "react-router-dom";
import React from 'react';

function Transactions() {
  return (
    <>
    <div className=" w-auto h-screen pt-10 flex bg-dark">
        <div className=" w-1/2 flex flex-col">
            <div>
                <svg
                    className=""
                    width="77"
                    height="77"
                    viewBox="0 0 77 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M64.1667 22.4583H60.9584V12.8333C60.9584 11.9824 60.6203 11.1664 60.0187 10.5647C59.417 9.96302 58.6009 9.625 57.75 9.625H12.8334C11.1315 9.625 9.49944 10.301 8.29608 11.5044C7.09273 12.7078 6.41669 14.3399 6.41669 16.0417V60.9583C6.41669 62.6601 7.09273 64.2922 8.29608 65.4956C9.49944 66.699 11.1315 67.375 12.8334 67.375H60.9584C62.6602 67.375 64.2923 66.699 65.4956 65.4956C66.699 64.2922 67.375 62.6601 67.375 60.9583V25.6667C67.375 24.8158 67.037 23.9997 66.4353 23.398C65.8336 22.7964 65.0176 22.4583 64.1667 22.4583Z"
                        fill="white"
                    />
                    <path
                        d="M60.9584 12.8333V22.4583H12.8334C11.1315 22.4583 9.49944 21.7823 8.29608 20.5789C7.09273 19.3756 6.41669 17.7435 6.41669 16.0417C6.41669 14.3399 7.09273 12.7078 8.29608 11.5044C9.49944 10.301 11.1315 9.625 12.8334 9.625H57.75C58.6009 9.625 59.417 9.96302 60.0187 10.5647C60.6203 11.1664 60.9584 11.9824 60.9584 12.8333ZM67.375 38.5H54.5417C53.6908 38.5 52.8747 38.838 52.2731 39.4397C51.6714 40.0414 51.3334 40.8574 51.3334 41.7083V48.125C51.3334 48.9759 51.6714 49.792 52.2731 50.3936C52.8747 50.9953 53.6908 51.3333 54.5417 51.3333H67.375C68.2259 51.3333 69.042 50.9953 69.6437 50.3936C70.2453 49.792 70.5834 48.9759 70.5834 48.125V41.7083C70.5834 40.8574 70.2453 40.0414 69.6437 39.4397C69.042 38.838 68.2259 38.5 67.375 38.5Z"
                        fill="#2ECC40"
                    />
                </svg>
                <span className="text-white" >BBVS</span><span className="text-[#40fa56] "> Wallet</span>
            </div>
            <div style={{ textAlign: "center", }}>
                <span className="text-white" >Transactions</span><span className="text-[#40fa56] "> History</span>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "auto", padding: "5px", flexDirection: "column", gap: "10px" }}>


                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>
                    <div style={{ width: "50%", height: "40px", backgroundColor: "#000", borderRadius: "20px", display: "grid", placeItems: "center" }}><span className="text-white">#5d54a654dada4654ad</span></div>


                </div>
            </div>
        </div>
        <div className=" flex flex-col w-1/2 items-center ">
            <div className=" w-[200px] h-[200px]">
                <svg width="200" height="200" viewBox="0 0 411 411" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="205.5" cy="205.5" r="205.5" fill="black" />
                    <g clip-path="url(#clip0_17_564)">
                        <path d="M302.602 136.298L232.501 65.2077C228.79 61.3392 224.349 58.2637 219.44 56.1635C214.532 54.0633 209.257 52.9811 203.928 52.9811C198.598 52.9811 193.323 54.0633 188.415 56.1635C183.506 58.2637 179.065 61.3392 175.354 65.2077L105.062 136.298L203.547 186.003L302.602 136.298ZM329.5 165.004L343.405 179.068C347.254 182.807 350.317 187.294 352.408 192.26C354.5 197.226 355.578 202.568 355.578 207.966C355.578 213.364 354.5 218.706 352.408 223.672C350.317 228.638 347.254 233.125 343.405 236.864L231.384 351.277C228.728 354.024 225.638 356.303 222.24 358.02V219.333L329.5 165.004ZM76.8696 165.004L62.9638 179.068C59.1149 182.807 56.0527 187.294 53.9609 192.26C51.8691 197.226 50.7908 202.568 50.7908 207.966C50.7908 213.364 51.8691 218.706 53.9609 223.672C56.0527 228.638 59.1149 233.125 62.9638 236.864L174.998 351.277C177.665 354.025 180.751 356.311 184.142 358.02V219.333L76.8696 165.004Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_17_564">
                            <rect width="304.786" height="308.25" fill="white" transform="translate(50.7977 51.375)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className=" flex w-3/4 mt-10 justify-around">
                <div className="  py-2 px-8 bg-black font-semibold text-white  rounded-md border-black border-2 ">
                    <Link className="grid grid-cols-1 text-[#40fa56] font-bold h-auto" to='/sendmoney'>
                        Send Coins
                    </Link>
                </div>
                <div className="  py-2 px-8 bg-white font-semibold text-green-500 border-2 rounded-md ">
                    <Link className="grid grid-cols-1 text-[#40fa56] font-bold h-auto" to='/recievemoney'>
                        Recieve Coins
                    </Link>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Transactions