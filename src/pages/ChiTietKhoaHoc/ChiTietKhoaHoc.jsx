import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const ChiTietKhoaHoc = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
    useEffect(() => {
        let maKhoaHoc = searchParam.get("maKhoaHoc");
        console.log(maKhoaHoc);
        khoaHocService.layChiTietKhoaHocTheoMa(maKhoaHoc).then((res) => {
            // console.log(res);
            setChiTietKhoaHoc(res.data)
            console.log(chiTietKhoaHoc);
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
                            <button>ĐĂNG KÝ</button>
                        </div>
                        <div className='w-4/12'>
                            <img src={chiTietKhoaHoc?.hinhAnh} alt="err" />
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