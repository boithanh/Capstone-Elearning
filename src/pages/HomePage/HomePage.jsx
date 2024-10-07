import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { path } from '../../common/path'

const HomePage = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            {location.pathname === path.homePage && <Banner />}
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default HomePage