import React, { useEffect, useState } from 'react'
import { khoaHocService } from '../../service/khoaHoc.service';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [valueDanhMuc, setValueDanhMuc] = useState([]);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Thay đổi trạng thái menu mỗi khi nút được ấn
    };
    useEffect(() => {
        khoaHocService.layAllDanhMucKhoaHoc().then((res) => {
            setValueDanhMuc(res.data);
        }).catch(() => {
            console.log(err);
        })
    }, [])
    return (
        <div className="topnav mobile-menu">
            <div className="active"></div>
            {isMenuOpen && (
                <div id="myLinks">
                    {
                        valueDanhMuc.map((item, index) => {
                            return (
                                <Link key={index} to={`/danh-muc-khoa-hoc?maDanhMuc=${item?.maDanhMuc}&MaNhom=GP01`} onClick={toggleMenu}>{item.tenDanhMuc}
                                </Link>
                            )
                        })
                    }
                </div>
            )}
            <button className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars" />
            </button>
        </div>
    )
}

export default MobileMenu