import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MobileMenuGlass = ({ valueDanhMuc }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Thay đổi trạng thái menu mỗi khi nút được ấn
    };
    return (
        <nav className="topnav mobile-menu tiny:!block sm:!hidden">
            <button className="icon" onClick={toggleMenu}>
                {isMenuOpen ? <i className="fa-solid fa-circle-xmark" />
                    : <i className="fa fa-bars" />}
            </button>
            {isMenuOpen && (
                <div id="myLinks" className='animate__animated animate__slideInDown'>
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

export default MobileMenuGlass