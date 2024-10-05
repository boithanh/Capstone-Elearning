import React from 'react'
import LogoIcon from '../Icon/LogoIcon'
import { Link } from 'react-router-dom'
import FormSearchKhoaHoc from '../Form/FormSearchKhoaHoc'
import CourseMenu from '../Menu/CourseMenu'
import WrapperSuggestCourse from '../Wrapper/WrapperSuggestCourse'
import MobileMenu from '../Menu/MobileMenu'


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
                        <WrapperSuggestCourse>
                            <FormSearchKhoaHoc />
                        </WrapperSuggestCourse>
                        <div className='inline-block ms-32'>
                            <Link className='me-8 text-white' to={"/sign-in"}>Đăng nhập</Link>
                            <Link className='text-white' to={"/sign-up"}>Đăng ký</Link>
                        </div>
                    </nav>
                </div>
                <MobileMenu />
            </div>
        </header>
    )
}

export default Header