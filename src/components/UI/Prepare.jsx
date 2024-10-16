import React from 'react'

const Prepare = () => {
    return (
        <div className='prepare'>
            <div className="container prepare_content gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]">
                <div className='prepare_left mb-10 animate__animated animate__fadeInUp animate__delay-1s animate__slow'>
                    <div className='title'>
                        <h2 className='text-4xl'>Prepare for the future, learn the right skills </h2>
                    </div>
                </div>
                <div className='prepare_right mb-5 xs:block xs:text-center lg:flex gap-3 animate__animated animate__fadeInUp animate__delay-1s animate__slow'>
                    <div className='mb-5'><span>99</span><p>Courses</p></div>
                    <div className='mb-5'><span>129</span><p>Teachers</p></div>
                    <div className='mb-5'><span>23</span><p>Award</p></div>
                </div>
            </div>
        </div >
    )
}

export default Prepare