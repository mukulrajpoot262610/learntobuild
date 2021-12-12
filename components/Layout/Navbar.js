import React from 'react'

const Navbar = () => {
    return (
        <div className="fixed z-50 backdrop-blur-xl flex justify-between items-center h-16 border-b border-slate-800 top-0 w-full px-4">
            <h1 className="uppercase text-font-800 text-3xl font-mono-2">Learn_To_Build</h1>
            <div className="flex items-center">
                <a href="https://github.com/mukulrajpoot262610/learntobuild" target="_blank">
                    <h1 className="btn capitalize text-xl btn-outline border-slate-600"><i className="fab text-2xl fa-github"></i><span className="hidden lg:block">&nbsp; GitHub</span></h1>
                </a>
                <button className="lg:hidden btn btn-outline btn-ghost ml-4 border-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar
