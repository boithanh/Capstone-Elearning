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
                // console.log(res.data);
                setListKhoaHoc(res.data);
            }).catch((err) => {
                console.log(err);
            })

        }, [searchParam.get("maDanhMuc")])
    return (
        <div className='conatainer danhMucKhoaHoc pb-16 pt-8'>
            <h1 className='font-bold text-3xl mb-10 w-10/12 mx-auto'>Danh sách khóa học theo danh mục: {searchParam.get("maDanhMuc") ? searchParam.get("maDanhMuc") : ""}</h1>
            <div className="grid grid-cols-4 gap-16 w-10/12 mx-auto">
                {listKhoaHoc.splice(-9).map((item, index) => {
                    // console.log(item);
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
                                <div>
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-regular fa-star" />
                                </div>

                            </span>
                        </div>
                        <div>
                            <button>ĐĂNG KÝ</button>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default DanhMucKhoaHoc