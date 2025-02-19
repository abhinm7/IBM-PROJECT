import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience <br /> Download Tomato App</p>
        <div className="app-download-platforms">
            <Link to='https://play.google.com/store/games?hl=en'><img src={assets.play_store} alt="" /></Link>
            <Link to='https://www.apple.com/in/app-store/'><img src={assets.app_store} alt="" /></Link>
        </div>
    </div>
  )
}

export default AppDownload