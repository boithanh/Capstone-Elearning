import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const ChiTietKhoaHoc = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [chiTietKhoaHoc, setChiTietKhoaHoc] = useState([]);
    useEffect(() => {
        let maKhoaHoc = searchParam.get("maKhoaHoc");
        console.log(maKhoaHoc);

        khoaHocService.layChiTietKhoaHocTheoMa(maKhoaHoc).then((res) => {
            // console.log(res);
            setChiTietKhoaHoc(res.data)

        }).catch((err) => {
            console.log(err);
        })
    }, [searchParam.get("maKhoaHoc")])

    return (
        <div className='container text-[#211C5B] py-14'>
            <h1 className='text-3xl font-semibold mb-5'>Giới thiệu khóa học</h1>
            <p>{chiTietKhoaHoc?.moTa}</p>
        </div>
    )
}

export default ChiTietKhoaHoc