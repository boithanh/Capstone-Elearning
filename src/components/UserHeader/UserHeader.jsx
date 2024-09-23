import React from 'react'
import LogoIcon from '../Icon/LogoIcon'
import { Link } from 'react-router-dom'

const UserHeader = () => {
    return (
        <header>
            <div className="container max-w-full">
                <div className="header_content flex items-center justify-items-center">
                    <div className="header_logo me-20">
                        <LogoIcon />
                    </div>
                    <nav className="header_navigate w-full">
                        <ul className='inline text-white'>Danh mục khóa học</ul>
                        <input type="text" placeholder='Tìm khóa học' className='w-4/12 mx-48' />
                        <Link className='me-8 text-white' to={"/sign-in"}>Đăng nhập</Link>
                        <Link className='text-white' to={"/sign-up"}>Đăng ký</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default UserHeader