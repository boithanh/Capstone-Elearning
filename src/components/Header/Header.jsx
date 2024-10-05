import React, { useState } from 'react'
import LogoIcon from '../Icon/LogoIcon'
import { Link } from 'react-router-dom'
import FormSearchKhoaHoc from '../Form/FormSearchKhoaHoc'
import CourseMenu from '../Menu/CourseMenu'
import WrapperSuggestCourse from '../Wrapper/WrapperSuggestCourse'
import MobileMenu from '../Menu/MobileMenu'
import { Avatar, Dropdown } from 'antd'
import UserIcon from '../Icon/UserIcon'
import LogOutIcon from '../Icon/LogOutIcon'
import Banner from '../Banner/Banner'

const Header = () => {
    const [infoUser, setInfoUser] = useState({
        avartar: "https://this-person-does-not-exist.com/img/avatar-gen89fbe58a15d2b85e6bdc6173bb43096b.jpg",
        name: "Thạnh Bối",
    })

    const items = [
        {
            label: <Link className='flex space-x-2 items-center font-bold'><UserIcon /><span>Thông tin cá nhân</span></Link>,
            key: '0',
        },
        {
            label: <Link className='flex space-x-2 items-center font-bold text-[#4054B2]' onClick={() => { setInfoUser(null) }}><LogOutIcon /><span>Đăng xuất</span></Link>,
            key: '1',
        },
        {
            type: 'divider',
        }
    ];
    // Note: infoUser giả lập user sau khi login sẽ có thông tin này để load lên header menu
    const checkUserLogin = () => {
        return infoUser ? <Dropdown
            menu={{
                items,
            }
            }
            trigger={['click']}>
            <Avatar className='cursor-pointer hover:bg-[#DEBE4C] duration-200' size={30} shape="square">{infoUser.name.charAt(0)}</Avatar>
        </Dropdown> : <>
            <Link className='me-8 text-white' to={"/sign-in"}>Đăng nhập</Link>
            <Link className='text-white' to={"/sign-up"}>Đăng ký</Link>
        </>
    }
    return (
        <>
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
                            <div className='inline-block w-4/12 text-right'>
                                {checkUserLogin()}
                            </div>
                        </nav>
                    </div>
                    <MobileMenu />
                </div>
            </header>
        </>
    )
}

export default Header