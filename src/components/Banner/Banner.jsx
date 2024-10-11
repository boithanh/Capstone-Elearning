import React from 'react'
import hero1 from './../../assets/img/hero1.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
                <div className='xs:block md:flex justify-between items-center gap-5'>
                    <div className='xs:full lg:w-6/12 mb-5'>
                        <h1 className='xs:text-5xl md:text-6xl mb-7 animate__animated animate__fadeInUp animate__slower animate__delay-1s'>Khởi đầu sự nghiệp của bạn</h1>
                        <p className='xs:text-2xl md:text-3xl mb-7  animate__animated animate__fadeInUp animate__slower animate__delay-2s'>Trở thành chuyên gia lập trình tại CyberSoft</p>
                        <button className='me-5 mb-4 animate__animated animate__fadeInUp animate__slower animate__delay-3s'>Xem khóa học</button>
                        <button className=' animate__animated animate__fadeInUp animate__slower animate__delay-4s'>Tư vấn học</button>
                    </div>
                    <div className='xs:full lg:w-6/12'>
                        <img className='w-full animate__animated animate__fadeInRight animate__slower animate__delay-2s' src={hero1} alt="err" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner