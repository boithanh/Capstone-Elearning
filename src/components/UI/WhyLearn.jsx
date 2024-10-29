import React from 'react'
import { Link } from 'react-router-dom'

const WhyLearn = () => {
    return (
        <div className='whyLearn pt-10 pb-20'>
            <div className='container mx-auto py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
                <div className='whyLearn_title mb-5 xs:w-full lg:w-4/12' data-aos="fade-down">
                    <h2 className='mb-5'>3 bước giúp
                        bạn chuyển nghề</h2>
                    <Link className='button-pink inline-block mb-5'>Tư vấn định hướng</Link>
                </div>
                <div className='whyLearn_content mb-5 xs:block lg:flex gap-6 justify-center' data-aos="fade-up">
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className="flip-card-front">
                                <i className="fa-solid fa-business-time" />
                                <h3>1</h3>
                                <p>Sắp xếp dành thời gian 3h mỗi ngày- tận dụng thời gian rảnh</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Learn Everywhere</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                <Link className='button-transparent'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className="flip-card-front">
                                <i className="fa-solid fa-earth-americas" />
                                <h3>2</h3>
                                <p>Chọn một lộ trình để đi</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Learn From The Best</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                <Link className='button-transparent'>Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className="flip-card-front">
                                <i className="fa-solid fa-trophy" />
                                <h3>3</h3>
                                <p>Thực hành trên dự án, đủ skill, kết nối doanh nghiệp sau khóa học để nhận việc</p>
                            </div>
                            <div className="flip-card-back">
                                <h3>Lifetime Access</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
                                <Link className='button-transparent'>Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyLearn