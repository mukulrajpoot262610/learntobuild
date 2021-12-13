import Navbar from './Navbar'
import Head from 'next/head'
import Sidebar from './Sidebar'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

    const router = useRouter();

    const [show, setShow] = useState(false);
    const showNavbar = () => {
        setShow(!show)
    }

    useEffect(() => {
        if (show) {
            setShow(!show);
        }
    }, [router.asPath]);

    return (
        <div className="bg-primary min-h-screen">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>

            <Navbar showNavbar={showNavbar} />
            {
                show ? (
                    <div className="fixed bg-primary w-full border-r border-slate-700 flex flex-col items-center h-full">
                        <img src="/js.gif" className="rounded-2xl mt-20 w-6/12" />
                        <Sidebar />
                    </div>
                ) : ""
            }
            <div className="pt-16 flex">
                <div className="fixed hidden w-3/12 xl:w-2/12 border-r border-slate-700 lg:flex flex-col items-center">
                    <img src="/js.gif" className="rounded-2xl mt-12 w-1/2" />
                    <Sidebar />
                </div>
                <div className="self-end ml-auto w-full lg:w-9/12 xl:w-10/12 p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
