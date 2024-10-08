import React, { useContext, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { getLocalStorage } from '../../utils/utils';
import { khoaHocService } from '../../service/khoaHoc.service';
import { NotificationContext } from '../../App';

const ChiTietKhoaHoc = () => {
    const { showNotification } = useContext(NotificationContext);
    const [searchParam, setSearchParam] = useSearchParams();
    const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
    const [duLieuDangKy, setDuLieuDangKy] = useState({ "maKhoaHoc": "", "taiKhoan": "", });
    const handleSignUpCourse = () => {
        let maKhoaHoc = searchParam.get("maKhoaHoc");
        let taiKhoan = getLocalStorage("user").taiKhoan;
        let token = getLocalStorage("user").accessToken;
        // console.log(userData);
        setDuLieuDangKy({
            maKhoaHoc, taiKhoan
        });
        khoaHocService.dangKyKhoaHocUser(token, duLieuDangKy).then((res) => {
            console.log(res);
            showNotification("Đăng ký thành công, vui lòng kiểm tra thông tin khóa đã đăng ký", "success");
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
                <div className='container text-[#211C5B] py-14 relative'>
                    <div className='flex items-center py-32 w-10/12 mx-auto'>
                        <div className='w-8/12 text-white'>
                            <h1 className='text-4xl uppercase mb-5'>{chiTietKhoaHoc?.tenKhoaHoc}</h1>
                            <p className='mb-5'>Đánh giá khóa học
                                <span className='text-[#F28820] ms-4'>
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                </span>
                            </p>
                            <button onClick={() => {
                                handleSignUpCourse();
                            }}>ĐĂNG KÝ</button>
                        </div>
                        <div className='w-4/12'>
                            <div className='w-full'><img src={chiTietKhoaHoc?.hinhAnh} alt="err" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail_course py-20">
                <div className='container'>
                    <h1 className='text-3xl font-semibold mb-5'>Giới thiệu khóa học</h1>
                    <p>{chiTietKhoaHoc?.moTa}</p>
                </div>
            </div>

        </>

    )
}

export default ChiTietKhoaHoc