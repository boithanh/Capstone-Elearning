import React from 'react'
import { Link } from 'react-router-dom'
import leftImg from "./../../assets/img/home-sec-21.png"
import { Flex, Progress } from 'antd'

const Ecourse = () => {
    return (
        <div className='eCourse py-20'>
            <div className='container gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
                <div className=' xs:block lg:flex justify-center items-center mb-5'>
                    <div className="left mb-5">
                        <div className="overlay animate__animated animate__fadeInUp animate__delay-1s animate__slow"></div>
                        <img src={leftImg} alt="err" className='w-full' />
                    </div>
                    <div className="right mb-5">
                        <h2 className='font-semibold text-4xl leading-normal mb-3 animate__animated animate__fadeInUp animate__delay-1s animate__slow'>E-Courses Platform
                            with Complete Features</h2>
                        <p className='mb-7 animate__animated animate__fadeInUp animate__delay-1s animate__slow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className='progress_bar mb-6'>
                            <Flex gap="large" vertical >
                                <Progress percent={97}
                                    percentPosition={{
                                        align: 'end',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                    strokeColor="#F4A044" status="active" />
                                <Progress percent={69}
                                    percentPosition={{
                                        align: 'end',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                    strokeColor="#784E9E" status="active" />
                                <Progress percent={88}
                                    percentPosition={{
                                        align: 'end',
                                        type: 'inner',
                                    }}
                                    size={[400, 20]}
                                    strokeColor="#211C5B" status="active" />

                            </Flex>
                        </div>
                        <Link className='button-pink inline-block mb-3 animate__animated animate__fadeInUp animate__delay-1s animate__slow'>Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecourse