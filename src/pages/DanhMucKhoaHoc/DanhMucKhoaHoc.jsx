import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const DanhMucKhoaHoc = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    useEffect(
        () => {
            let maDanhMuc = searchParam.get("maDanhMuc");
            khoaHocService.layKhoaHocTheoDanhMuc(maDanhMuc).then((res) => {
                console.log(res.data);
                setListKhoaHoc(res.data);
            }).catch((err) => {
                console.log(err);
            })

        }, [searchParam.get("maDanhMuc")])
    return (
        <div className='conatainer'>
            <h1 className='font-bold text-3xl my-3'>Danh sách khóa học theo danh mục: {searchParam.get("maDanhMuc") ? searchParam.get("maDanhMuc") : ""}</h1>
            <div className="grid grid-cols-4 gap-5">
                {listKhoaHoc.map((item, index) => {
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

export default DanhMucKhoaHoc