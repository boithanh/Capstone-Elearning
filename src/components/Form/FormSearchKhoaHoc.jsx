import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { path } from './../../common/path'



const FormSearchKhoaHoc = () => {
    const [valueSearch, setValueSearch] = useState([]);
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!valueSearch) {
    //         setOpenDropdown(false);
    //     }
    //     // handleGetValueChildren(valueSearch)
    // }, [valueSearch])

    const handleSubmit = (event) => {
        // console.log("hello");
        event.preventDefault();
        navigate(`${path.timKiemKhoaHoc}?tenKhoaHoc=${valueSearch}`)
    }
    const handleChange = (event) => {

        setValueSearch(event.target.value);
        console.log("Tôi là change");
        // // B1: Xử lý hành vi của phần gợi ý: khi người dùng nhập dữ liệu, sẽ bắt đầu thực hiện lấy dữ liệu keyword và gọi API tới backend để tìm kiếm sản phẩm được gợi ý
        // if (!event.target.value) {
        //     console.log("Tôi là dữ liệu rỗng");

        //     setOpenDropdown(true);
        // }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='w-1/2 inline-block'>

                <input onChange={handleChange} className='w-6/12 ms-32' type="text" placeholder='Tìm khóa học' />
                <button type='submit' onClick={handleSubmit} className='p-2 text-sm'><i className="fa-solid fa-magnifying-glass"></i></button>

            </form>
        </>


    )
}

export default FormSearchKhoaHoc