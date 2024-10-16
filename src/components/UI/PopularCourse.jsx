import React from 'react'
import { Link } from 'react-router-dom'
import rightImg from './../../assets/img/bg-discover-front.png'
import popular1 from './../../assets/img/logo-popular-courses.png'
import popular2 from './../../assets/img/logo-popular-courses2.png'
import popular3 from './../../assets/img/logo-popular-courses3.png'
import popular4 from './../../assets/img/logo-popular-courses4.png'

const PopularCourse = () => {
    return (
        <div className='popularCourse py-20'>
            <div className='container gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
                <div className='xs:block lg:flex justify-center items-center mb-5'>
                    <div className="left mb-5">
                        <div className="popular_title animate__animated animate__fadeInDown animate__delay-1s animate__slow">
                            <h2 className='font-semibold text-4xl leading-normal mb-3'>Discover Our
                                Popular Courses</h2>
                            <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className='popular_content xs:block lg:grid grid-cols-2 grid-rows-2 mb-5 animate__animated animate__fadeInUp animate__delay-1s animate__slow'>
                            <div className='xs:block lg:flex flex-col justify-center mb-5'>
                                <img src={popular1} alt="err" width={78} height={78} className='mb-5 hover:animate-bounce' />
                                <p>Digital Painting</p>
                            </div>
                            <div className='xs:block lg:flex flex-col justify-center mb-5'>
                                <img src={popular2} alt="err" width={78} height={78} className='mb-5 hover:animate-bounce' />
                                <p>Code Learning</p>
                            </div>
                            <div className='xs:block lg:flex flex-col justify-center mb-5'>
                                <img src={popular3} alt="err" width={78} height={78} className='mb-5 hover:animate-bounce' />
                                <p>Language Learning</p>
                            </div>
                            <div className='xs:block lg:flex flex-col justify-center mb-5'>
                                <img src={popular4} alt="err" width={78} height={78} className='mb-5 hover:animate-bounce' />
                                <p>Web Design</p>
                            </div>
                        </div>
                        <Link className='button-pink inline-block mb-3 animate__animated animate__fadeInDown animate__delay-1s animate__slow'>More Course</Link>
                    </div>
                    <div className="right mb-5">
                        <div className="overlay animate__animated animate__fadeInDown animate__delay-1s animate__slow"></div>
                        <img src={rightImg} alt="err" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourse