import React from 'react';

const Main = (props) => {
  return (
    <>
      <div className="container-fluid text-monospace bg-black" style={{ height: "auto", minHeight: "100vh" }}> <br /> <br />
      <h1 style={{textAlign:"center",backgroundColor:"#fff",borderRadius:"10px"}}> My <span style={{ color: "#40fa56" }}>Uploads</span></h1>
        <br />
        &nbsp;
        <br />
        <h2 className='bg-white text-wrapper p-2 rounded-lg overflow-wrap break-words' id="account"><span className="text-[#40fa56]">AccountID</span>:{props.account}</h2>
        <div style={{display:"flex column",justifyContent:"center"}}>

          <div className='border rounded p-2'>
            <div  className='embed-responsive embed-responsive-21by9' style={{ maxHeight: 'auto'}}>
              <video src={`https://ipfs.io/ipfs/${props.currentHash}`} controls className='embed-responsive-item'></video>
            </div>
            <h3><i className="text-white bg-dark p-2 rounded-xl">Video <span style={{ color: "#40fa56" }}>Title</span>: {props.currentTitle}</i></h3>
          </div>

          <div className='p-3'>
            <h3  className="bg-dark w-max p-2 rounded-xl" style={{ color: "#fff" }}>All<span style={{ color: "#40fa56" }}> Videos </span>({props.videos.length})</h3>
            <div
              className="text-center flex column justify-center gap-6 flex-wrap p-3"
              style={{ maxHeight: 'auto', maxWidth: '100%'}}
            >
              {props.videos.map((video, key) => {
                return (
                  <div className="card text-center border-4 rounded bg-dark transition duration-300 hover:scale-110" style={{ maxwidth: '250px'}} key={key}>
                    <div>
                      <p onClick={() => props.changeVideo(video.hash, video.title)}>
                        <video src={`https://ipfs.io/ipfs/${video.hash}`} style={{maxWidth:"400px"}}  className='feed-card'/>
                      </p>
                      <small className="text-dark flex justify-center align-middle">
                      <div className='flex justify-start w-full text-white' style={{alignItems:"center", minHeight:"fit-content",gap:"10px",padding:"10px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512" height="40" width="40"><circle fill="#01A437" cx="256" cy="256" r="256"/><path fill="#42C76E" d="M256 9.28c136.12 0 246.46 110.35 246.46 246.46 0 3.22-.08 6.42-.21 9.62C497.2 133.7 388.89 28.51 256 28.51S14.8 133.7 9.75 265.36c-.13-3.2-.21-6.4-.21-9.62C9.54 119.63 119.88 9.28 256 9.28z"/><path fill="#fff" d="M351.74 275.46c17.09-11.03 17.04-23.32 0-33.09l-133.52-97.7c-13.92-8.73-28.44-3.6-28.05 14.57l.54 191.94c1.2 19.71 12.44 25.12 29.04 16l131.99-91.72z"/></svg>
                        <h5>{video.title}</h5>
                      </div>
                    </small>
                    </div>
                    
                  </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
