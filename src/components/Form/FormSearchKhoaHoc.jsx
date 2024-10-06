import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { path } from './../../common/path'

const FormSearchKhoaHoc = ({ setOpenDropdown, handleGetValueChildren }) => {
    const [valueSearch, setValueSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!valueSearch) {
            setOpenDropdown(false);
        }
        handleGetValueChildren(valueSearch)
    }, [valueSearch])


    const handleSubmit = (event) => {
        // console.log("hello");
        event.preventDefault();
        navigate(`${path.timKiemKhoaHoc}?tenKhoaHoc=${valueSearch}`);
        setOpenDropdown(false);
    }

    const handleChange = (event) => {
        setValueSearch(event.target.value);

        // Đã chuyển lên trên useEffect (Tách componnetn xly chức năng và giao diện)
        // if (!event.target.value) {
        //     setOpenDropdown(false)
        // }

    }
    return (
        <>
            <form onSubmit={handleSubmit} className='w-1/2 inline-block'>
                <input onChange={handleChange} className='w-6/12 ms-32' type="text" placeholder='Tìm khóa học' />
                <button type='submit' onClick={handleSubmit} className='p-2 text-sm hidden'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    )
}

export default FormSearchKhoaHoc