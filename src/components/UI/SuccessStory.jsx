import React from 'react'
import leftImg from './../../assets/img/bg-story-front.png'
import person1 from './../../assets/img/tes1.jpg'
import person2 from './../../assets/img/tes2.jpg'
import person3 from './../../assets/img/tes3.jpg'

import { Carousel } from "antd"

const SuccessStory = () => {
    const contentStyle = {
        margin: 0,
        height: '230px',
        textAlign: 'center',
    };
    return (
        <div className='successStory py-20'>
            <div className='container gap-3 xs:block md:flex items-start py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
                <div className='xs:block md:grid grid-cols-2 gap-10 items-center mb-5'>
                    <div className="left mb-5">
                        <div className="overlay" data-aos="fade-up" data-aos-delay="1000"></div>
                        <img src={leftImg} alt="err" className='w-full' data-aos="fade-up" data-aos-delay="3000" />
                    </div>
                    <div className="right mb-5" data-aos="fade-up" data-aos-delay="1000">
                        <h2 className='font-semibold leading-normal mb-3 text-center' data-aos="flip-left" data-aos-delay="1000">Success Story</h2>
                        <div className='carousel_inner'>
                            <Carousel arrows infinite={true} dots={true} autoplay={false} draggable={true}>
                                <div className='carousel_item'>
                                    <div style={contentStyle}>
                                        <p className='mb-5 leading-normal' data-aos="fade-right" data-aos-delay="1500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                        <div className='grid grid-cols-2 mx-auto gap-5'>
                                            <div className='carousel_img' data-aos="fade-left" data-aos-delay="1000"><img width={50} height={50} src={person1} alt="err" /></div>
                                            <div className='carousel_content' data-aos="fade-up" data-aos-delay="2000">
                                                <h3>Sulistyonohadi</h3>
                                                <span>CEO Tika Studio</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='carousel_item'>
                                    <div style={contentStyle}>
                                        <p className='mb-5 leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                        <div className='grid grid-cols-2 mx-auto gap-5'>
                                            <div className='carousel_img'><img width={50} height={50} src={person2} alt="err" /></div>
                                            <div className='carousel_content'>
                                                <h3>Trisnowati</h3>
                                                <span>Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='carousel_item'>
                                    <div style={contentStyle}>
                                        <p className='mb-5 leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                        <div className='grid grid-cols-2 mx-auto gap-5'>
                                            <div className='carousel_img'><img width={50} height={50} src={person3} alt="err" /></div>
                                            <div className='carousel_content'>
                                                <h3>Linda Pranasari</h3>
                                                <span>Founder Nirmana</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStory