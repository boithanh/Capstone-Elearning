import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getLocalStorage } from '../../utils/utils';
import { khoaHocService } from '../../service/khoaHoc.service';
import { NotificationContext } from '../../App';

const ChiTietKhoaHoc = () => {
    const { showNotification } = useContext(NotificationContext);
    const [searchParam, setSearchParam] = useSearchParams();
    const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
    const [duLieuDangKy, setDuLieuDangKy] = useState({ "maKhoaHoc": "", "taiKhoan": "", });
    const navigate = useNavigate();
    const handleSignUpCourse = () => {
        let maKhoaHoc = searchParam.get("maKhoaHoc");
        let taiKhoan = getLocalStorage("user").taiKhoan;
        let token = getLocalStorage("user").accessToken;
        // console.log(userData);
        setDuLieuDangKy({
            maKhoaHoc, taiKhoan
        });
        khoaHocService.dangKyKhoaHocUser(token, duLieuDangKy).then((res) => {
            // console.log(res);
            showNotification("Đăng ký thành công, vui lòng kiểm tra thông tin khóa đã đăng ký", "success");
            navigate("/user-info")
        }).catch((err) => {
            console.log(err);
            showNotification(err.response.data, "error");
        })
    }

    useEffect(() => {
        let maKhoaHoc = searchParam.get("maKhoaHoc");
        // console.log(maKhoaHoc);
        khoaHocService.layChiTietKhoaHocTheoMa(maKhoaHoc).then((res) => {
            // console.log(res);
            setChiTietKhoaHoc(res.data)
            // console.log(chiTietKhoaHoc);
        }).catch((err) => {
            console.log(err);
        })
    }, [searchParam.get("maKhoaHoc")])

    return (
        <>
            <div className='banner_course'>
                <div className='container text-[#211C5B] py-14 relative xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
                    <div className='xs:block md:flex items-center py-32 w-10/12 mx-auto'>
                        <div className='xs:w-full md:w-8/12 text-white mb-10'>
                            <h1 className='text-4xl uppercase mb-5' data-aos="fade-left" data-aos-delay="1000">{chiTietKhoaHoc?.tenKhoaHoc}</h1>
                            <p className='mb-5' data-aos="fade-left" data-aos-delay="1500">Đánh giá khóa học
                                <span className='text-[#F28820] ms-4' data-aos="fade-left" data-aos-delay="3000">
                                    <i className="fa-solid fa-star " />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                </span>
                            </p>
                            <button onClick={() => {
                                getLocalStorage("user") ? handleSignUpCourse() : navigate("/login");
                            }} data-aos="fade-down" data-aos-delay="3000">ĐĂNG KÝ</button>
                        </div>
                        <div className='xs:w-full md:w-4/12 mb-5'>
                            <div className='w-full'><img src={chiTietKhoaHoc?.hinhAnh} alt="err" className='xs:!w-full xs:!h-full md:!w-[310px] md:!h-[176px]' data-aos="fade-down-left" data-aos-delay="3000" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail_course py-20">
                <div className='container xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg'>
                    <h1 className='text-3xl font-semibold mb-5' data-aos="fade-up" data-aos-delay="2000">Giới thiệu khóa học</h1>
                    <p data-aos="fade-up" data-aos-delay="2000">{chiTietKhoaHoc?.moTa}</p>
                </div>
            </div>

        </>

    )
}

export default ChiTietKhoaHoc