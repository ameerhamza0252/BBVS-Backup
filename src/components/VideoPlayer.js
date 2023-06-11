import React from 'react'

function VideoPlayer(props) {
   
  return (
    <>
         <div className='border rounded p-2'>
            <div  className='embed-responsive embed-responsive-21by9' style={{ maxHeight: 'auto'}}>
              <video src={`https://ipfs.io/ipfs/${props.currentHash}`} controls className='embed-responsive-item'></video>
            </div>
            <h3><i className="text-white bg-dark p-2 rounded-xl">Video <span style={{ color: "#40fa56" }}>Title</span>: {props.currentTitle}</i></h3>
          </div>
    </>
  )
}

export default VideoPlayer;