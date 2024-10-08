import React, { useEffect, useState } from 'react'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { khoaHocService } from '../../service/khoaHoc.service';

const CourseMenu = () => {
    const [valueDanhMuc, setValueDanhMuc] = useState([]);
    useEffect(() => {
        khoaHocService.layAllDanhMucKhoaHoc().then((res) => {
            setValueDanhMuc(res.data);
        }).catch(() => {
            console.log(err);
        })
    }, [])

    // console.log(valueDanhMuc);

    const items = valueDanhMuc.map((item, index) => ({
        label: <NavLink to={`/danh-muc-khoa-hoc?maDanhMuc=${item?.maDanhMuc}&ten=${item?.tenDanhMuc}&MaNhom=GP01`}>{item?.tenDanhMuc}</NavLink>,
        key: { index },
    }))

    return (
        <div className='menuDanhMuc inline-block'>
            <i className="fa-solid fa-bars me-3 text-white" />
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <button onClick={(e) => e.preventDefault()}>
                    <Space className='text-white'>
                        Danh mục khóa học
                    </Space>
                </button>
            </Dropdown>
        </div>
    )
}

export default CourseMenu