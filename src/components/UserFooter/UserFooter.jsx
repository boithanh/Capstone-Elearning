import React from 'react'
import LogoIcon from '../Icon/LogoIcon'

const UserFooter = () => {
    return (
        <footer className='py-8'>
            <div className="container">
                <div className="footer_content">
                    <div className="grid grid-cols-3 gap-5">
                        <div className='footer_left'>
                            <LogoIcon />
                            <p>CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
                            <h2>Đăng ký nhận Ưu đãi & Bài viết mới</h2>
                            <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                            <form className='space-y-5'>
                                <input type="email" placeholder='Email liên hệ' />
                                <input type="text" placeholder='Điện thoại liên hệ' />
                                <button className='block' type='submit'>ĐĂNG KÝ NGAY</button>
                            </form>
                        </div>
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus sit suscipit harum, at voluptatem, nihil dignissimos sint vel repellat distinctio, illum est illo non omnis minima libero ut? Magni!</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam dolor quidem sint nostrum possimus vero, laborum molestiae ipsa, distinctio aspernatur tempore ut quis illum praesentium expedita suscipit voluptatibus, culpa libero.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default UserFooter