import React from 'react'

const Uploadvideo = (props) => {
  return (
<div className='flex flex-row w-auto justify-center  items-center' style={{backgroundColor:"#212529",minHeight:"100vh",color:"#fff"}}>
<div className=' flex flex-col justify-content-center md:flex-row min-w-3/4 xl:w-2/4 h-[600px] bg-[#343a40] rounded-3xl my-5' >
    <div className=' md:w-4/5 h-full grid grid-cols-1 justify-items-center items-center'>
        <div className=' min-w-max w-2/5 text-center align-middle justify-center'>
        <div className="justify-items-center items-center mx-10 my-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#181A1D" />
                <g clip-path="url(#clip0_2_22)">
                  <path
                    d="M58.9007 26.53L45.2557 12.6925C44.5333 11.9395 43.6688 11.3409 42.7135 10.9321C41.7581 10.5233 40.7313 10.3126 39.6939 10.3126C38.6565 10.3126 37.6297 10.5233 36.6744 10.9321C35.719 11.3409 34.8545 11.9395 34.1321 12.6925L20.4501 26.53L39.6198 36.205L58.9007 26.53ZM64.1362 32.1175L66.8429 34.855C67.5921 35.5829 68.1881 36.4563 68.5953 37.4229C69.0025 38.3895 69.2123 39.4293 69.2123 40.48C69.2123 41.5307 69.0025 42.5705 68.5953 43.5371C68.1881 44.5037 67.5921 45.3771 66.8429 46.105L45.0382 68.375C44.5213 68.9097 43.9198 69.3533 43.2584 69.6875V42.6925L64.1362 32.1175ZM14.9625 32.1175L12.2557 34.855C11.5065 35.5829 10.9105 36.4563 10.5033 37.4229C10.0962 38.3895 9.88628 39.4293 9.88628 40.48C9.88628 41.5307 10.0962 42.5705 10.5033 43.5371C10.9105 44.5037 11.5065 45.3771 12.2557 46.105L34.0629 68.375C34.582 68.91 35.1827 69.355 35.8427 69.6875V42.6925L14.9625 32.1175Z"
                    fill="white"
                  />
                </g>
                <defs>

                </defs>
              </svg>
            </div>
            <div className='w-36 py-3  rounded-full bg-black text-white'>Upload Video</div>
        </div>
        <div className=' h-auto w-3/4 flex flex-col justify-content-center gap-5' style={{width:"100%"}}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const title = event.target.videoTitle.value;
              props.uploadVideo(title);
            }}
          >   
            <div className="form-group mr-sm-2">
            <div>Video Tittle</div> 
              <input
                id="videoTitle"
                type="text"
                className="rounded-md border-2"
                placeholder="Enter Title..."
                required
                style={{width:"100%"}}
              />
              <div  className='flex flex-col' >
              Select Video
                <input type="file" accept=".mp4, .mkv .ogg .wmv" onChange={props.captureFile}  className='py-1 rounded-md border-2' /></div>
               
            </div>
            <button type="submit" className="text-center text-white bg-black rounded-full w-full h-10">
              Upload!
            </button>
            &nbsp;
          </form>
            
        </div>
    </div>
  
</div>

</div>
  )
}

export default Uploadvideo
