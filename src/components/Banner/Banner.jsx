import React from 'react'
import hero1 from './../../assets/img/hero1.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className='w-6/12'>
                        <h1 className='text-6xl mb-7'>Khởi đầu sự nghiệp của bạn</h1>
                        <p className='text-3xl mb-7'>Trở thành chuyên gia lập trình tại CyberSoft</p>
                        <button className='me-5'>Xem khóa học</button>
                        <button>Tư vấn học</button>
                    </div>
                    <div className='w-6/12'>
                        <img className='w-full' src={hero1} alt="err" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner