import React from 'react'
import { Link } from 'react-router-dom'
import { path } from 'slate'

const Discover = () => {
    return (
        <div className='discover py-9'>
            <div className='overlay'></div>
            <div className='container py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px] relative'>
                <div className='letStarted_content justify-between xs:block xs:text-center lg:text-left items-center lg:flex'>
                    <div className='left mb-5' data-aos="fade-down">
                        <h2 className='text-4xl font-semibold text-white'>Discover more courses</h2>
                    </div>
                    <div className='right mb-5' data-aos="fade-up">
                        <Link className='button-pink inline-block' to={path.signUpPage}>View all courses</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover