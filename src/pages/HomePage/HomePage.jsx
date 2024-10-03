import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <Header />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default HomePage