import React from 'react';
import Identicon from 'identicon.js';
import './App.css';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white flex-md-nowrap p-1 shadow text-monospace sticky-top">
      <ul className="navbar-nav px-3 flex-row gap-3 w-100 justify-content-between align-items-center">
      <li className='transition duration-500 hover:scale-110 hover:rotate-180' ><Link to="/" >
          <svg
            width="50"
            height="50"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#181A1D" />
            <g clipPath="url(#clip0_2_22)">
              <path
                d="M58.9007 26.53L45.2557 12.6925C44.5333 11.9395 43.6688 11.3409 42.7135 10.9321C41.7581 10.5233 40.7313 10.3126 39.6939 10.3126C38.6565 10.3126 37.6297 10.5233 36.6744 10.9321C35.719 11.3409 34.8545 11.9395 34.1321 12.6925L20.4501 26.53L39.6198 36.205L58.9007 26.53ZM64.1362 32.1175L66.8429 34.855C67.5921 35.5829 68.1881 36.4563 68.5953 37.4229C69.0025 38.3895 69.2123 39.4293 69.2123 40.48C69.2123 41.5307 69.0025 42.5705 68.5953 43.5371C68.1881 44.5037 67.5921 45.3771 66.8429 46.105L45.0382 68.375C44.5214 68.9097 43.9198 69.3533 43.2584 69.6875V42.6925L64.1362 32.1175ZM14.9625 32.1175L12.2557 34.855C11.5065 35.5829 10.9105 36.4563 10.5033 37.4229C10.0962 38.3895 9.88628 39.4293 9.88628 40.48C9.88628 41.5307 10.0962 42.5705 10.5033 43.5371C10.9105 44.5037 11.5065 45.3771 12.2557 46.105L34.0629 68.375C34.582 68.91 35.1827 69.355 35.8427 69.6875V42.6925L14.9625 32.1175Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_22">
                <rect
                  width="59.3258"
                  height="60"
                  fill="white"
                  transform="translate(9.88764 10)"
                />
              </clipPath>
            </defs></svg>
            </Link>
            </li> 
            <li className='justify-center align-content-center'>
           
                  <div className="relative flex w-full flex-wrap">
                  <input
                    type="search"
                    className="relative w-80 flex-auto rounded-l text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" 
                    id="search-bar"
                    style={{backgroundColor:"#181A1D",cursor:"ibeam",color:"#fff",borderRadius:"20px"}}/>
                </div>
        
          </li>
          <li className='flex gap-4'>
            <Link to="Wallet">
        <svg className="nav-icons transition duration-300 hover:scale-110 hover:rotate-12" width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.6666 14.5833H39.5833V8.33333C39.5833 7.7808 39.3638 7.25089 38.9731 6.86019C38.5824 6.46949 38.0525 6.25 37.5 6.25H8.33329C7.22822 6.25 6.16842 6.68899 5.38701 7.47039C4.60561 8.25179 4.16663 9.3116 4.16663 10.4167V39.5833C4.16663 40.6884 4.60561 41.7482 5.38701 42.5296C6.16842 43.311 7.22822 43.75 8.33329 43.75H39.5833C40.6884 43.75 41.7482 43.311 42.5296 42.5296C43.311 41.7482 43.75 40.6884 43.75 39.5833V16.6667C43.75 16.1141 43.5305 15.5842 43.1398 15.1935C42.7491 14.8028 42.2192 14.5833 41.6666 14.5833Z" fill="#181A1D"/>
<path d="M39.5833 8.33333V14.5833H8.33329C7.22822 14.5833 6.16842 14.1443 5.38701 13.3629C4.60561 12.5815 4.16663 11.5217 4.16663 10.4167C4.16663 9.3116 4.60561 8.25179 5.38701 7.47039C6.16842 6.68899 7.22822 6.25 8.33329 6.25H37.5C38.0525 6.25 38.5824 6.46949 38.9731 6.86019C39.3638 7.25089 39.5833 7.7808 39.5833 8.33333ZM43.75 25H35.4166C34.8641 25 34.3342 25.2195 33.9435 25.6102C33.5528 26.0009 33.3333 26.5308 33.3333 27.0833V31.25C33.3333 31.8025 33.5528 32.3324 33.9435 32.7231C34.3342 33.1138 34.8641 33.3333 35.4166 33.3333H43.75C44.3025 33.3333 44.8324 33.1138 45.2231 32.7231C45.6138 32.3324 45.8333 31.8025 45.8333 31.25V27.0833C45.8333 26.5308 45.6138 26.0009 45.2231 25.6102C44.8324 25.2195 44.3025 25 43.75 25Z" fill="#2ECC40"/>
</svg>
</Link>
    <Link to="Uploadvideo">     
    <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg " className=" nav-icons transition duration-300 hover:scale-110 hover:rotate-12">
    <path d="M37.4951 36.2456C36.3428 36.2456 35.4102 35.4064 35.4102 34.3695C35.4102 33.3326 36.3428 32.4934 37.4951 32.4934C42.0898 32.4934 45.8301 29.1279 45.8301 24.9934C45.8301 21.0567 42.4072 17.7746 38.042 17.5198L36.8115 17.4539L36.2891 16.4565C34.2285 12.533 29.7949 9.9978 24.9951 9.9978C20.1953 9.9978 15.7617 12.533 13.7012 16.4565L13.1787 17.4539L11.9531 17.5242C7.58301 17.779 4.16504 21.0611 4.16504 24.9978C4.16504 29.1323 7.90527 32.4978 12.5 32.4978C13.6523 32.4978 14.585 33.337 14.585 34.3739C14.585 35.4108 13.6523 36.25 12.5 36.25C5.60547 36.25 0 31.2061 0 25.0022C0 19.4618 4.5166 14.7869 10.4834 13.9126C13.4131 9.22452 18.9844 6.25 24.9951 6.25C31.0059 6.25 36.5771 9.22452 39.5117 13.9038C45.4785 14.7781 49.9951 19.4574 49.9951 24.9978C49.9951 31.1973 44.3896 36.2456 37.4951 36.2456Z" fill="#181A1D"/>
    <path d="M30.9974 34.9988C30.4865 34.9988 29.9755 34.802 29.5818 34.4129L24.9977 29.8289L20.4135 34.4129C19.6354 35.1957 18.3652 35.1957 17.5871 34.4129C16.8043 33.6302 16.8043 32.3647 17.5871 31.5866L23.5868 25.5871C24.3649 24.8043 25.6351 24.8043 26.4132 25.5871L32.4129 31.5866C33.1957 32.3693 33.1957 33.6349 32.4129 34.4129C32.0192 34.8067 31.5083 34.9988 30.9974 34.9988Z" fill="#2ECC40"/>
    <path d="M25 43C23.8946 43 23 42.2539 23 41.332V29.668C23 28.7461 23.8946 28 25 28C26.1054 28 27 28.7461 27 29.668V41.3359C27 42.2539 26.1054 43 25 43Z" fill="#2ECC40"/>
    </svg>
    </Link>  
  </li>
        <li className="nav-item text-nowrap d-absolute d-sm-none d-sm-block transition duration-300 hover:scale-110 hover:translate-y-1">
          {props.account ? (
            <Link to="main">
            <img
              className="ml-2"
              width="auto"
              height="auto"
              src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`}
              alt="AccountImage"
              style={{border:"5px solid #40fa56",borderRadius:"10px"}}
            />
            
            </Link>
          ) : (
            <li className='flex gap-3'> <button style={{backgroundColor:"#181A1D",color:"#fff",padding:"5px",display:"block",width:"80px"}}>Login</button>
            <button style={{backgroundColor:"#2ECC40",color:"#fff",padding:"5px",width:"80px"}}>SignUp</button>
            </li>
          )}
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
