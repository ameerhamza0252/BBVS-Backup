import React from 'react'
import VideoPlayer from './VideoPlayer';
import {Link} from 'react-router-dom'

function Feed(props) {
    
    //const navigate = useNavigate();
   
    return (
        <>
            <div className='bg-dark p-3' style={{minHeight:"100vh",height:"auto"}}>
                <h2 className="mt-10 text-white bg-black w-max p-2 rounded-xl">Featured <span className='text-[#3ac050]'>Videos</span></h2>
            <div
                className=" flex gap-5 justify-center flex-wrap mt-10"
                
            >
                {props.videos.map((video, key) => {
                    
                    return (
                    <div>
                        <div className='card transition duration-500 hover:scale-110 rounded-lg border-4 feed-card'>
                           
                        <p onClick={() =>{props.changeVideo(video.hash,video.title)}}>
                          <Link to="videoplayer"><video src={`https://ipfs.io/ipfs/${video.hash}`} style={{maxWidth:"350px"}} className='feed-card' /></Link>
                        </p>
                        
                        <small className="text-dark flex justify-center align-middle card">
                        <div className='flex justify-start w-full' style={{alignItems:"center", minHeight:"fit-content",gap:"10px",padding:"10px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512" height="40" width="40"><circle fill="#01A437" cx="256" cy="256" r="256"/><path fill="#42C76E" d="M256 9.28c136.12 0 246.46 110.35 246.46 246.46 0 3.22-.08 6.42-.21 9.62C497.2 133.7 388.89 28.51 256 28.51S14.8 133.7 9.75 265.36c-.13-3.2-.21-6.4-.21-9.62C9.54 119.63 119.88 9.28 256 9.28z"/><path fill="#fff" d="M351.74 275.46c17.09-11.03 17.04-23.32 0-33.09l-133.52-97.7c-13.92-8.73-28.44-3.6-28.05 14.57l.54 191.94c1.2 19.71 12.44 25.12 29.04 16l131.99-91.72z"/></svg>
                          <h5 className=''>{video.title}</h5>
                        </div>
                      </small>
                      </div>
                      
                    </div>
                    );
                })}
            </div>
            </div>
         
        </>
    )
}

export default Feed