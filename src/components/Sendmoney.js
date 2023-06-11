import React from "react";
import Recievemoney from "./Recievemoney";
import { Link } from "react-router-dom";

const Sendmoney = () => {
  return (
    <div className="flex flex-col w-auto h-auto items-center pt-5 justify-center bg-[#131212] border-black">
      <div className="w-3/4 grid grid-rows-1 grid-flow-col justify-start items-start">
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
            <span className="text-white font-semibold ">{"Send"}</span>
            <span className="text-[#40fa56] "> Coins</span>
          </div>
        </div>
      <div className=" flex flex-col md:flex-row justify-center items-center min-w-3/4 w-4/5 xl:w-full xl:h-[600px] sm:h-auto">
        
        <div className=" md:w-3/5 h-full grid grid-cols-1 justify-items-center items-center ">
          <div className=" min-w-max w-2/5 text-center">
            <div className="justify-items-center items-center mx-28">
              <svg
                className="h-[106px] w-[106px] my-6"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="53" cy="53" r="53" fill="black" />
                <g clip-path="url(#clip0_17_299)">
                  <path
                    d="M78.0434 35.1522L59.9638 16.8176C59.0067 15.8199 57.8612 15.0267 56.5954 14.485C55.3295 13.9433 53.969 13.6642 52.5944 13.6642C51.2199 13.6642 49.8594 13.9433 48.5935 14.485C47.3277 15.0267 46.1822 15.8199 45.2251 16.8176L27.0964 35.1522L52.4962 47.9716L78.0434 35.1522ZM84.9804 42.5557L88.5668 46.1829C89.5595 47.1473 90.3493 48.3046 90.8888 49.5854C91.4283 50.8661 91.7063 52.2439 91.7063 53.636C91.7063 55.0281 91.4283 56.4059 90.8888 57.6866C90.3493 58.9674 89.5595 60.1247 88.5668 61.0891L59.6756 90.5969C58.9908 91.3054 58.1938 91.8931 57.3174 92.3359V56.5675L84.9804 42.5557ZM19.8253 42.5557L16.2388 46.1829C15.2462 47.1473 14.4564 48.3046 13.9169 49.5854C13.3774 50.8661 13.0993 52.2439 13.0993 53.636C13.0993 55.0281 13.3774 56.4059 13.9169 57.6866C14.4564 58.9674 15.2462 60.1247 16.2388 61.0891L45.1334 90.5969C45.8212 91.3057 46.6171 91.8954 47.4916 92.3359V56.5675L19.8253 42.5557Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_299">
                    <rect
                      width="78.6067"
                      height="79.5"
                      fill="white"
                      transform="translate(13.1011 13.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className=" h-auto xl:w-2/4 flex flex-col justify-center gap-6">
            <div className=" flex flex-col">
              <span className="text-white bg-gray-600 w-full px-2">
                Receiver<span className="text-[#40fa56]"> Address</span> :{" "}
                {"883488"}
              </span>
            </div>
            <div className=" flex flex-col">
              <span className="text-white bg-gray-600 w-full px-2">
                Specify<span className="text-[#40fa56]"> Amount</span> :{" "}
                {"883488"}
              </span>
            </div>
            <div className=" flex flex-col">
              <span className="text-white bg-gray-600 w-full px-2">
                Your<span className="text-[#40fa56] "> Balance</span> :{" "}
                {"883488"}
              </span>
            </div>
          </div>

          <div className=" grid grid-cols-2 w-3/5 mt-5 items-center gap-4 ">
            <div className="sm:w-auto  sm:h-auto xl:w-4/5 h-16 p-2 text-center text-white bg-white rounded-md grid grid-flow-col ">
              <Link className="grid grid-cols-1 text-[#40fa56] font-bold h-auto"  to='/recievemoney'>
                Recieve Coins
              </Link>
            </div>
            <div className=" sm:w-auto sm:h-auto  xl:w-4/5 xl:h-10 p-2 text-center bg-black rounded-md grid grid-flow-col">
              <Link className="grid grid-cols-1 font-bold text-white" to='/sendmoney'>Send Coins</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sendmoney;
