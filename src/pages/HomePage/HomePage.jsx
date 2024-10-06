import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'

const HomePage = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            {location.pathname !== '/chi-tiet' && <Banner />}
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default HomePage