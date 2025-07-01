import React, { useRef, useState } from 'react'
import './App.css'
import { Icon } from '@iconify-icon/react/dist/iconify.js';


const App = () => {

  const videoRef = useRef(null);

  const [isPlay, setIsPlay] = useState(false)
  const [isMute, setIsMute] = useState(false)

  const handelplay = (() => {

    if (isPlay) {
      videoRef.current.pause()
      setIsPlay(false)
    }
    else {
      videoRef.current.play()
      setIsPlay(true)
    }

  })

  const perv = (() => {
    videoRef.current.currentTime -= 3
  })
  const next = (() => {
    videoRef.current.currentTime += 3
  })
  const volPlus = (() => {
    videoRef.current.volume += 0.3
  })
  const volMinus = (() => {
    videoRef.current.volume -= 0.3
  })
  const handelMute = (() => {

    videoRef.current.muted = !isMute
    setIsMute(!isMute)

  })

  return (
    <>
      <div className="main w-full h-[100vh] bg-black">
        <div className="container w-full h-[85vh] flex flex-col items-center justify-center">
          <video ref={videoRef} className='w-[800px]'>
            <source src="https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4" type="" />
          </video>
        </div>
        <div className="controlBtns h-[15vh] border-t-2 border-white w-full flex justify-center items-center gap-5 relative">

          <button onClick={volPlus} className='cursor-pointer text-[30px] text-white'><Icon icon="mdi:volume-plus" /></button>

          {/* 3s Prev Cut */}
          <button className='cursor-pointer text-[20px] text-white' onClick={perv}>
            <Icon icon="ooui:next-rtl" />
            <Icon icon="ooui:next-rtl" />
            <Icon icon="ooui:next-rtl" />
          </button>

          {/* Play Pause Button */}
          <button className='cursor-pointer text-[40px] text-white' onClick={handelplay}>{isPlay ? <Icon icon="icon-park-outline:pause-one" /> : <Icon icon="icon-park-outline:play" />}</button>

          {/* 3s Next Cut*/}
          <button className='cursor-pointer text-[20px] text-white' onClick={next}>
            <Icon icon="ooui:next-ltr" />
            <Icon icon="ooui:next-ltr" />
            <Icon icon="ooui:next-ltr" />
          </button>


          <button onClick={volMinus} className='cursor-pointer text-[30px] text-white'><Icon icon="mdi:volume-minus" /></button>


          <button onClick={handelMute} className='cursor-pointer text-[25px] text-white absolute right-10'>{isMute ? <Icon icon="garden:volume-muted-fill-12" /> : <Icon icon="garden:volume-unmuted-fill-12" />}</button>
        </div>
      </div>
    </>
  )
}

export default App
