import React from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div style={{backgroundColor:"#212529",minHeight:"100vh"}}>
      <div className=" flex flex-col md:flex-row min-w-3/4 w-4/5 xl:w-full xl:h-[600px] sm:h-auto align-center">
        <div className="w-20 grid grid-rows-1 grid-flow-col">
          <svg
            className=""
            width="77"
            height="77"
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.1667 22.4583H60.9584V12.8333C60.9584 11.9824 60.6203 11.1664 60.0187 10.5647C59.417 9.96302 58.6009 9.625 57.75 9.625H12.8334C11.1315 9.625 9.49944 10.301 8.29608 11.5044C7.09273 12.7078 6.41669 14.3399 6.41669 16.0417V60.9583C6.41669 62.6601 7.09273 64.2922 8.29608 65.4956C9.49944 66.699 11.1315 67.375 12.8334 67.375H60.9584C62.6602 67.375 64.2923 66.699 65.4956 65.4956C66.699 64.2922 67.375 62.6601 67.375 60.9583V25.6667C67.375 24.8158 67.037 23.9997 66.4353 23.398C65.8336 22.7964 65.0176 22.4583 64.1667 22.4583Z"
              fill="white"
            />
            <path
              d="M60.9584 12.8333V22.4583H12.8334C11.1315 22.4583 9.49944 21.7823 8.29608 20.5789C7.09273 19.3756 6.41669 17.7435 6.41669 16.0417C6.41669 14.3399 7.09273 12.7078 8.29608 11.5044C9.49944 10.301 11.1315 9.625 12.8334 9.625H57.75C58.6009 9.625 59.417 9.96302 60.0187 10.5647C60.6203 11.1664 60.9584 11.9824 60.9584 12.8333ZM67.375 38.5H54.5417C53.6908 38.5 52.8747 38.838 52.2731 39.4397C51.6714 40.0414 51.3334 40.8574 51.3334 41.7083V48.125C51.3334 48.9759 51.6714 49.792 52.2731 50.3936C52.8747 50.9953 53.6908 51.3333 54.5417 51.3333H67.375C68.2259 51.3333 69.042 50.9953 69.6437 50.3936C70.2453 49.792 70.5834 48.9759 70.5834 48.125V41.7083C70.5834 40.8574 70.2453 40.0414 69.6437 39.4397C69.042 38.838 68.2259 38.5 67.375 38.5Z"
              fill="#2ECC40"
            />
          </svg>
          <div className="my-[20px] w-40 text-xl">
          <span className="text-white" >BBVS</span><span className="text-[#40fa56] "> Wallet</span>
          </div>
        </div>
        <div className=" md:w-3/5 h-full grid grid-cols-1 justify-items-center items-center my-10">
          <div className=" min-w-max w-2/5 text-center">
            <div className="justify-items-center items-center mx-20">
              <svg
                className="my-[20px]"
                width="80"
                height="80"
                viewBox="0 0 116 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_207)">
                  <path
                    d="M58 116C90.0325 116 116 90.0325 116 58C116 25.9675 90.0325 0 58 0C25.9675 0 0 25.9675 0 58C0 90.0325 25.9675 116 58 116Z"
                    fill="white"
                  />
                  <path
                    d="M59.0998 56.8077C66.5281 56.8077 72.5498 51.8811 72.5498 45.8038C72.5498 39.7266 66.5281 34.8 59.0998 34.8C51.6716 34.8 45.6499 39.7266 45.6499 45.8038C45.6499 51.8811 51.6716 56.8077 59.0998 56.8077Z"
                    fill="#2ECC40"
                  />
                  <path
                    d="M81.2001 81.1957C81.2001 81.1957 81.2001 81.7089 81.2001 71.4557C81.2001 61.2026 67.5213 61.0154 67.5213 61.0154H48.4789C48.4789 61.0154 34.8001 61.1402 34.8001 71.4557C34.8001 81.7089 34.8001 81.1957 34.8001 81.1957H81.2001Z"
                    fill="#2ECC40"
                  />
                </g>
                <defs></defs>
              </svg>
            </div>
          </div>
          <div className=" h-auto w-3/4 flex flex-col justify-center gap-6">
            <div className=" flex flex-col">
              <span className="text-white bg-black w-full px-2 rounded-xl p-2" >
                User<span className="text-[#40fa56]"> Name</span>: {"1654ad"}
              </span>
            </div>
            <div className=" flex flex-col">
              <span className="text-white bg-black w-full px-2 rounded-xl p-2">
                Wallet<span className="text-[#40fa56]"> Address</span>:{"asda"}
                {"883488"}
              </span>
            </div>
            <div className=" flex flex-col">
              <span className="text-white bg-black w-full px-2 rounded-xl p-2">
                Wallet<span className="text-[#40fa56] "> Balance</span>:{"0.655 B-Coin"}
              </span>
            </div>
          </div>

          <div className=" grid grid-cols-2 w-3/5 items-center gap-4 ">
            <div className="sm:w-auto  sm:h-auto xl:w-4/5 h-16 p-2 text-center text-white bg-white rounded-md grid grid-flow-col ">
              
             <Link className="grid grid-cols-1 text-[#40fa56] font-bold h-auto hover:text-black" to='/recievemoney' style={{textDecoration:"none"}}>
            Recieve Coins
              </Link>

            </div>
            <div className=" sm:w-auto sm:h-auto  xl:w-4/5 xl:h-10 p-2 text-center  bg-black rounded-md grid grid-flow-col "  style={{textDecoration:"none"}}>
              <Link className="grid grid-cols-1 font-bold text-white  hover:text-[#40fa56]" to='/sendmoney'>
                Send Coins
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] flex justify-center items-center xl:my-20">
          <div className="h-3/5 w-3/4">
            <div style={{padding:"10px",display:"flex",flexDirection:"column",gap:"20px",width:"210px",alignItems:"center"}}>
              <div style={{display:"inline-block"}}>
              <svg width="200" height="200" viewBox="0 0 411 411" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="205.5" cy="205.5" r="205.5" fill="black"/>
                        <g clip-path="url(#clip0_17_564)">
                        <path d="M302.602 136.298L232.501 65.2077C228.79 61.3392 224.349 58.2637 219.44 56.1635C214.532 54.0633 209.257 52.9811 203.928 52.9811C198.598 52.9811 193.323 54.0633 188.415 56.1635C183.506 58.2637 179.065 61.3392 175.354 65.2077L105.062 136.298L203.547 186.003L302.602 136.298ZM329.5 165.004L343.405 179.068C347.254 182.807 350.317 187.294 352.408 192.26C354.5 197.226 355.578 202.568 355.578 207.966C355.578 213.364 354.5 218.706 352.408 223.672C350.317 228.638 347.254 233.125 343.405 236.864L231.384 351.277C228.728 354.024 225.638 356.303 222.24 358.02V219.333L329.5 165.004ZM76.8696 165.004L62.9638 179.068C59.1149 182.807 56.0527 187.294 53.9609 192.26C51.8691 197.226 50.7908 202.568 50.7908 207.966C50.7908 213.364 51.8691 218.706 53.9609 223.672C56.0527 228.638 59.1149 233.125 62.9638 236.864L174.998 351.277C177.665 354.025 180.751 356.311 184.142 358.02V219.333L76.8696 165.004Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_17_564">
                        <rect width="304.786" height="308.25" fill="white" transform="translate(50.7977 51.375)"/>
                        </clipPath>
                        </defs>
                    </svg>
              </div>
              <Link to='/transactions'><span style={{backgroundColor:"#000",color:"#fff",padding:"10px",borderRadius:"10px"}}>See Transctions</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
