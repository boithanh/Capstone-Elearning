import React, { useEffect, useState } from 'react'
import { khoaHocService } from '../../service/khoaHoc.service';
import { Link } from 'react-router-dom';
const ListKhoaHoc = () => {
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    useEffect(
        () => {
            khoaHocService.layAllKhoaHoc().then((res) => {
                // console.log(res.data);
                setListKhoaHoc(res.data);
            }).catch((err) => {
                console.log(err);
            })

        }, []);
    return (
        <div className='container listKhoaHoc py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
            <h1 className='font-bold text-3xl mb-10 text-[#211C5B] mx-auto' data-aos="flip-down" data-aos-delay="1000">Các khóa học mới nhất</h1>
            <div className=" xs:block md:grid-cols-2 md:grid lg:grid lg:grid-cols-3 gap-16 mx-auto">
                {listKhoaHoc.splice(-9).map((item, index) => {
                    // console.log(item);
                    return <div className='mb-14' data-aos="fade-up" data-aos-delay="1000">
                        <div className='mb-3 img_content'>
                            <img src={item?.hinhAnh} alt="err" className='xs:!w-full xs:!h-full md:!w-[310px] md:!h-[176px]' />
                        </div>
                        <div className='mb-3'>
                            <h2 className='leading-8'>{item?.tenKhoaHoc}</h2>
                        </div>
                        <div className='flex items-center justify-start mb-8'>
                            <div>
                                <i className="fa-solid fa-user-graduate text-2xl" />
                                <p className='inline text-xl font-semibold mx-5'>{item?.soLuongHocVien}</p>
                            </div>
                            <span className='text-[#E31C8D] me-4 inline-block'>
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-regular fa-star" />
                            </span>
                        </div>
                        <Link to={`chi-tiet?maKhoaHoc=${item.maKhoaHoc}`}>ĐĂNG KÝ</Link>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default ListKhoaHoc