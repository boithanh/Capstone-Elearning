import React, { useEffect, useState } from 'react'
import { khoaHocService } from '../../service/khoaHoc.service';

const ListKhoaHoc = () => {
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    useEffect(
        () => {
            khoaHocService.layAllKhoaHoc().then((res) => {
                console.log(res.data);
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
                    console.log(item);
                    return <div>
                        <div className='mb-3 img_content'>
                            <img src={item?.hinhAnh} alt="err" className='w-full' />
                        </div>
                        <div className='mb-3'>
                            <h2>{item?.tenKhoaHoc}</h2>
                        </div>
                        <div className='mb-5'>
                            <i class="fa-solid fa-user-graduate text-2xl"></i>
                            <p className='inline text-xl font-semibold mx-5'>{item?.soLuongHocVien}</p>
                            <span className='text-[#E31C8D] me-4'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </span>
                        </div>
                        <div>
                            <button className='bg-black px-5 py-2 text-white'>ĐĂNG KÝ</button>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default ListKhoaHoc