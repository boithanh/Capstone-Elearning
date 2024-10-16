import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../common/path'

const LetStarted = () => {
    return (
        <div className='letStarted py-9'>
            <div className='overlay'></div>
            <div className='container py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px] relative'>
                <div className='letStarted_content justify-between xs:block xs:text-center lg:text-left items-center lg:flex'>
                    <div className='left mb-5'>
                        <h2 className='text-4xl font-semibold text-white animate__animated animate__fadeInUp animate__delay-1s animate__slow'>Let's Get Starterd</h2>
                    </div>
                    <div className='right mb-5'>
                        <Link className='button-pink inline-block animate__animated animate__fadeInDown animate__delay-1s animate__slow' to={path.signUpPage}>Register Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetStarted