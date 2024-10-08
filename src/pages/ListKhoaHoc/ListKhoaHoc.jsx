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

        }, [])

    return (
        <div className='container listKhoaHoc py-10'>
            <h1 className='font-bold text-3xl mb-10 text-[#211C5B] w-10/12 mx-auto'>Các khóa học mới nhất</h1>
            <div className="grid grid-cols-3 gap-16 w-10/12 mx-auto">
                {listKhoaHoc.splice(-9).map((item, index) => {
                    // console.log(item);
                    return <div>
                        <div className='mb-3 img_content'>
                            <img src={item?.hinhAnh} alt="err" className='w-full' />
                        </div>
                        <div className='mb-3'>
                            <h2>{item?.tenKhoaHoc}</h2>
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