import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../common/path'
import animationPageNotFound from "./../../assets/animation/pageNotFoundAnimation.json"
import Lottie from 'lottie-react'

const PageNotFound = () => {
    return (
        <div className='text-center flex flex-col items-center h-screen justify-center'>
            <Lottie animationData={animationPageNotFound} loop={true} style={{ width: "400px", height: "400px", margin: "30px" }} />
            <Link to={path.homPage} className='px-6 py-3 bg-[#E31C8D] hover:bg-[#211C5B] border-2 border-black delay-75 rounded-xl text-white'>Bấm vào để quay về trang chủ</Link>
        </div>
    )
}

export default PageNotFound