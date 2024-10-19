import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const DanhMucKhoaHoc = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    useEffect(
        () => {
            let maDanhMuc = searchParam.get("maDanhMuc");
            khoaHocService.layKhoaHocTheoDanhMuc(maDanhMuc).then((res) => {
                // console.log(res.data);
                setListKhoaHoc(res.data);
                // console.log(listKhoaHoc);

            }).catch((err) => {
                console.log(err);
            })

        }, [searchParam.get("maDanhMuc"), searchParam.get("ten")])
    console.log(searchParam.get("ten"));

    return (
        <>
            <div className="container px-0 mx-auto xs:max-w-full">
                <div className='banner_danhmuc text-center pt-28'>
                    <h1 className='xs:text-2xl sm:text-3xl text-[#211C5B]' data-aos="flip-down" data-aos-delay="1000">{searchParam.get("ten")}</h1>
                </div>
            </div>
            <div className='container danhMucKhoaHoc pb-16 pt-8 px-5 mx-auto xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
                <h1 className='font-bold xs:text-xl sm:text-2xl mb-10 mx-auto' data-aos="flip-up" data-aos-delay="1000">Các khóa học phổ biến</h1>
                <div className='xs:w-full xs:block md:grid sm:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {listKhoaHoc.splice(-9).map((item, index) => {
                        // console.log(item);
                        return <div className='p-3 mb-10' key={index} data-aos="fade-up" data-aos-delay="1000">
                            <div className='mb-3 img_content'>
                                <img src={item?.hinhAnh} alt="err" className='xs:!w-full xs:!h-full md:!w-[310px] md:!h-[176px]' />
                            </div>
                            <div className='mb-3'>
                                <h2>{item?.tenKhoaHoc}</h2>
                            </div>
                            <div className='flex items-center justify-start mb-8'>
                                <div>
                                    <i className="fa-solid fa-user-graduate text-2xl" />
                                    <p className='inline text-xl font-semibold mx-5'>{item?.soLuongHocVien}</p>
                                </div>
                                <span className='text-[#E31C8D] me-4'>
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-regular fa-star" />
                                </span>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="3000">
                                <Link to={`/chi-tiet?maKhoaHoc=${item?.maKhoaHoc}`}>ĐĂNG KÝ</Link>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </>)

}

export default DanhMucKhoaHoc