import React from 'react'
import LogoIcon from '../Icon/LogoIcon'

const UserFooter = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_content">
                    <div className="grid grid-cols-3 gap-5">
                        <div className='footer_left'>
                            <LogoIcon />
                            <p>CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
                            <h2>Đăng ký nhận Ưu đãi & Bài viết mới</h2>
                            <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                            <form>
                                <input type="email" placeholder='Email liên hệ' />
                                <input type="number" placeholder='Điện thoại liên hệ' />
                                <button type='submit'>ĐĂNG KÝ NGAY</button>
                            </form>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default UserFooter