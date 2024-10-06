import React from 'react'
import LogoIcon from '../Icon/LogoIcon'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className='pt-10 pb-10'>
            <div className="container">
                <div className="footer_content">
                    <div className="grid grid-cols-3 gap-10">
                        <div className='footer_subscribe'>
                            <LogoIcon />
                            <p className='mb-8'>CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
                            <h2>Đăng ký nhận Ưu đãi & Bài viết mới</h2>
                            <p className='mb-3'>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                            <form className='space-y-5 mb-8'>
                                <input type="email" placeholder='Email liên hệ' />
                                <input type="text" placeholder='Điện thoại liên hệ' />
                                <div className='flex'><button className='block' type='submit'>ĐĂNG KÝ NGAY</button></div>
                            </form>
                        </div>
                        <div className='footer_advisory'>
                            <div className='mb-10'><button onClick={() => window.location.href = "https://www.facebook.com/lophocviet/"}>TƯ VẤN & ĐĂNG KÝ HỌC</button></div>
                            <ul>
                                <div>
                                    <li><i className="fa-solid fa-location-dot" />Cơ sở 1: 112 Cao Thắng, Quận 3</li>
                                    <li><i className="fa-solid fa-location-dot" />Cơ sở 2: 124 Điện Biên Phủ, Quận 1</li>
                                    <li><i className="fa-solid fa-location-dot" />Cơ sở 3: P3-00.05 Chung cư Cityland Park Hills, Phường 10, Quận Gò Vấp</li>
                                    <li><i className="fa-solid fa-location-dot" />Cơ sở 4: 6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)</li>
                                    <li><i className="fa-solid fa-location-dot" />Cơ sở 5: 103 Nguyễn Hữu Dật, Hải Châu</li>
                                    <li><i className="fa-solid fa-phone" />096.105.1014 - 098.407.5835</li>
                                </div>

                            </ul>
                        </div>
                        <div className='footer_social'>
                            <iframe width="340px" height="325px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dff0b361a589b4b941%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Ffda70356ffd3af6a5%26relation%3Dparent.parent&container_width=360&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340" style={{ border: 'none', visibility: 'visible', width: 340, height: 325 }} data-gtm-yt-inspected-11="true" className />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer