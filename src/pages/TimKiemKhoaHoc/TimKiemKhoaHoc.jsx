import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const TimKiemKhoaHoc = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [listKhoaHoc, setListKhoaHoc] = useState([]);
    useEffect(
        () => {
            let tenKhoaHoc = searchParam.get("tenKhoaHoc");
            khoaHocService.layKhoaHocTheoTen(tenKhoaHoc).then((res) => {
                setListKhoaHoc(res.data);
            }).catch((err) => {
                setListKhoaHoc([]);
            })

        }, [searchParam.get("tenKhoaHoc")])

    return (
        <div className='findCourse bg-[#E4D0E5]'>
            <div className='container timKiemKhoaHoc py-10 xs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[1140px]'>
                <div>
                    <h1 className='font-bold text-3xl mb-10 text-[#423E73] pt-24'>{listKhoaHoc.length > 0 ? `Tìm thấy ${listKhoaHoc.length} khóa học: ${searchParam.get("tenKhoaHoc")}` : "Khóa học bạn tìm không có, vui lòng tìm với từ khóa khác, vd: Tư Duy"}</h1>
                    {listKhoaHoc.map((item, index) => {
                        return <Link to={`/chi-tiet?maKhoaHoc=${item.maKhoaHoc}`} className='mb-10 block xl:ps-20 xl:pe-20' data-aos="fade-up">
                            <div className='findCourse_item xs:block xl:flex items-center justify-end gap-5 rounded-tr-3xl rounded-bl-3x text-white'>
                                <div className='xs:w-full lg:w-6/12 xl:w-3/12 mx-auto'>
                                    <div className='xs:p-5 xl:p-0'>
                                        <img src={item?.hinhAnh} alt="err" className='w-64 h-36 object-cover object-center xs:mb-3 lg:mb-0 rounded-bl-3xl p-3' />
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
        </div>
    )
}

export default TimKiemKhoaHoc