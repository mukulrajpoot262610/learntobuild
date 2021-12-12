import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="bg-primary min-h-screen">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Navbar />
            <div className="pt-16 flex">
                <div className="hidden md:w-3/12 xl:w-2/12 border-r border-slate-700 lg:flex flex-col items-center">
                    <img src="/js.gif" className="rounded-2xl mt-12 w-1/2" />
                    <Sidebar />
                </div>
                <div className="w-12/12 sm:w-8/12 md:w-9/12 xl:w-10/12 p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
