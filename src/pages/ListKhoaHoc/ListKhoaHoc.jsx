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
        <div className='conatainer listKhoaHoc'>
            <h1 className='font-bold text-3xl my-3'>Các khóa học mới nhất</h1>
            <div className="grid grid-cols-4 gap-5">
                {listKhoaHoc.splice(0, 8).map((item, index) => {
                    console.log(item);
                    return <div>
                        <div className='w-[200px]'>
                            <img src={item?.hinhAnh} alt="err" className='w-full' />
                        </div>
                        <div>
                            <h2>{item.tenKhoaHoc}</h2>
                        </div>
                        <div>
                            <h3>{item.congViec?.tenCongViec}</h3>
                            <p><span className='text-yellow-400 space-x-2'><i class="fa-regular fa-star"></i>{item.congViec?.saoCongViec}</span></p><span>{item.congViec?.danhGia}</span>
                        </div>
                        <div>
                            <p>Lượt xem: {item.luotXem}</p>
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