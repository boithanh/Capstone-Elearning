import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const TimKiemKhoaHoc = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    // console.log(searchParam.get("tenKhoaHoc"));
    useEffect(
        () => {
            let tenKhoaHoc = searchParam.get("tenKhoaHoc");
            khoaHocService.layKhoaHocTheoTen(tenKhoaHoc).then((res) => {
                console.log(res.data);
                setListKhoaHoc(res.data);
            }).catch((err) => {
                console.log(err);
                setListKhoaHoc([]);
            })

        }, [searchParam.get("tenKhoaHoc")])

    return (
        <div className='container timKiemKhoaHoc py-10'>
            <h1 className='font-bold text-3xl mb-10 text-[#211C5B]'>{listKhoaHoc.length > 0 ? `Tìm thấy ${listKhoaHoc.length} khóa học: ${searchParam.get("tenKhoaHoc")}` : "Khóa học bạn tìm không có, vui lòng tìm với từ khóa khác, vd: Tư Duy"}</h1>
            <div>
                {listKhoaHoc.map((item, index) => {
                    console.log(item);
                    return <Link to={`/chi-tiet?maKhoaHoc=${item.maKhoaHoc}`} className='mb-10 block'>
                        <div className='flex items-center justify-end gap-5 border-t pt-1 border-black bg-[#E4D0E5] text-[#211C5B]'>
                            <div className='w-3/12'>
                                <div>
                                    <img src={item?.hinhAnh} alt="err" className='w-64 h-36 object-cover object-center' />
                                </div>
                            </div>
                            <div className='w-7/12 pt-3 pb-5'>
                                <div>
                                    <h2 className='text-2xl font-extrabold'>{item?.tenKhoaHoc}</h2>
                                </div>
                                <div>
                                    <p>{item?.moTa}</p>
                                </div>
                            </div>
                            <div className='w-2/12 text-right'>
                                <span className='text-[#E31C8D] me-4'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>
                                <p className='me-3'>( {item?.soLuongHocVien} học viên )</p>
                            </div>
                        </div>
                    </Link>
                })
                }
            </div>
        </div>
    )
}

export default TimKiemKhoaHoc