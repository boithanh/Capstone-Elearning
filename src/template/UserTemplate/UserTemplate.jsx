import React from 'react'
import UserHeader from '../../components/UserHeader/UserHeader'
import UserFooter from '../../components/UserFooter/UserFooter'
import { Outlet } from 'react-router-dom'

const UserTemplate = () => {
    return (
        <>
            <UserHeader />
            <main>
                <Outlet />
            </main>
            <UserFooter />
        </>
    )
}

export default UserTemplate