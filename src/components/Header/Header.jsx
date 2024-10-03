import React from 'react'
import LogoIcon from '../Icon/LogoIcon'
import { Link } from 'react-router-dom'
import { myFunction } from '../../common/menu'
import FormSearchKhoaHoc from '../Form/FormSearchKhoaHoc'
import CourseMenu from '../Menu/CourseMenu'


const Header = () => {
    return (
        <header>
            <div className="container max-w-full">
                <div className="header_content flex items-center justify-items-center">
                    <div className="header_logo me-20">
                        <LogoIcon />
                    </div>
                    <nav className="header_navigate w-full">
                        <CourseMenu />
                        <FormSearchKhoaHoc />
                        <div className='inline-block ms-32'>
                            <Link className='me-8 text-white' to={"/sign-in"}>Đăng nhập</Link>
                            <Link className='text-white' to={"/sign-up"}>Đăng ký</Link>
                        </div>
                    </nav>
                </div>
                <div className="topnav">
                    <button className="active py-7"></button>
                    <div id="myLinks">
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                    <button href="javascript:void(0);" className="icon" onClick={myFunction}>
                        <i className="fa fa-bars" />
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header