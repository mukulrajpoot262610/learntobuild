import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default Layout
