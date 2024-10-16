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
        <div className='container timKiemKhoaHoc py-10 xs:max-w-full bg-[#E4D0E5]'>
            <h1 className='font-bold text-3xl mb-10 text-[#423E73]'>{listKhoaHoc.length > 0 ? `Tìm thấy ${listKhoaHoc.length} khóa học: ${searchParam.get("tenKhoaHoc")}` : "Khóa học bạn tìm không có, vui lòng tìm với từ khóa khác, vd: Tư Duy"}</h1>
            <div>
                {listKhoaHoc.map((item, index) => {
                    console.log(item);
                    return <Link to={`/chi-tiet?maKhoaHoc=${item.maKhoaHoc}`} className='mb-10 block xl:ps-20 xl:pe-20'>
                        <div className='xs:block xl:flex items-center justify-end gap-5 border-t-2 rounded-tr-3xl rounded-bl-3xl border-[#211C5B] bg-[#423E73] text-white' data-aos="zoom-in-left" data-aos-delay="1000">
                            <div className='xs:w-full lg:w-6/12 xl:w-3/12 mx-auto'>
                                <div className='xs:p-5 xl:p-0'>
                                    <img src={item?.hinhAnh} alt="err" className='w-64 h-36 object-cover object-center xs:mb-3 lg:mb-0 rounded-bl-3xl' />
                                </div>
                            </div>
                            <div className='xs:w-full lg:w-6/12 xl:w-7/12 pt-3 pb-5 mx-auto'>
                                <div className='mb-3 xs:p-5 xl:p-0'>
                                    <h2 className='text-2xl font-extrabold'>{item?.tenKhoaHoc}</h2>
                                </div>
                                <div className='mb-3 xs:p-5 xl:p-0 mx-auto'>
                                    <p>{item?.moTa}</p>
                                </div>
                            </div>
                            <div className='xs:w-full lg:w-full xl:w-2/12 xs:text-left sm:text-right xs:p-5 xl:p-0 mx-auto'>
                                <span className='text-[#f4a044] me-5'>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </span>
                                <p className='me-4'>( {item?.soLuongHocVien} học viên )</p>
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