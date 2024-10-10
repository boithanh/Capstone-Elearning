import React from 'react'
import hero1 from './../../assets/img/hero1.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container py-10 xs:max-w-full md:max-w-screen-md lg:max-w-screen-lg'>
                <div className='xs:block md:flex justify-between items-center gap-5'>
                    <div className='xs:full lg:w-6/12 mb-5'>
                        <h1 className='xs:text-4xl md:text-6xl mb-7'>Khởi đầu sự nghiệp của bạn</h1>
                        <p className='xs:text-2xl md:text-3xl mb-7'>Trở thành chuyên gia lập trình tại CyberSoft</p>
                        <button className='me-5 mb-4'>Xem khóa học</button>
                        <button>Tư vấn học</button>
                    </div>
                    <div className='xs:full lg:w-6/12'>
                        <img className='w-full' src={hero1} alt="err" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner