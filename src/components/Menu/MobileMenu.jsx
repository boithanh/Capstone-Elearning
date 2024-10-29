import React, { useEffect, useState } from 'react'
import { khoaHocService } from '../../service/khoaHoc.service';
import { Link } from 'react-router-dom';

const MobileMenu = ({ valueDanhMuc }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Thay đổi trạng thái menu mỗi khi nút được ấn
    };
    return (
        <nav className="topnav mobile-menu xs:!block sm:!hidden">
            <button className="icon" onClick={toggleMenu}>
                <i className="fa fa-bars" />
            </button>
            {isMenuOpen && (
                <div id="myLinks" className='animate__animated animate__fast animate__jello'>
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
        </nav>
    )
}

export default MobileMenu