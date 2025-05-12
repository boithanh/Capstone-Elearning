import React from 'react'
import CountUp from 'react-countup'

const Prepare = () => {
    return (
        <div className='prepare'>
            <div className="container prepare_content gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]">
                <div className='prepare_left mb-10' data-aos="fade-up">
                    <div className='title'>
                        <h2 className='text-4xl'>Prepare for the future, learn the right skills </h2>
                    </div>
                </div>
                <div className='prepare_right mb-5 xs:block xs:text-center lg:flex gap-3' data-aos="fade-down">
                    <CountUp
                        start={0}
                        end={99}
                        duration={2.75}
                        delay={0}
                    >
                        {({ countUpRef }) => (
                            <div className='mb-5'>
                                <span ref={countUpRef} >99</span>
                                <p>Courses</p>
                            </div>
                        )}
                    </CountUp>
                    <CountUp
                        start={0}
                        end={129}
                        duration={2.75}
                        delay={0}
                    >
                        {({ countUpRef }) => (
                            <div className='mb-5'>
                                <span ref={countUpRef} >129</span>
                                <p>Teachers</p>
                            </div>
                        )}
                    </CountUp>
                    <CountUp
                        start={0}
                        end={23}
                        duration={2.75}
                        delay={0}
                    >
                        {({ countUpRef }) => (
                            <div className='mb-5'>
                                <span ref={countUpRef} >23</span>
                                <p>Award</p>
                            </div>
                        )}
                    </CountUp>

                </div>
            </div>
        </div >
    )
}

export default Prepare