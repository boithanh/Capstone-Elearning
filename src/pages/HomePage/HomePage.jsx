import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import { path } from '../../common/path'
import LetStarted from '../../components/UI/LetStarted'
import Discover from '../../components/UI/Discover'
import Prepare from '../../components/UI/Prepare'

const HomePage = () => {
    const location = useLocation();
    return (
        <>
            <Header />
            {location.pathname === path.homePage && (<> <Banner /> <Prepare /> </>)}

            <main className='min-h-screen'>
                <Outlet />
            </main>
            {location.pathname === path.homePage && (<><Discover />
                <LetStarted /></>)}
            <Footer />
        </>
    )
}

export default HomePage