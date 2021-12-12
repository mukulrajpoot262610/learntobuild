import React from 'react'

const Navbar = () => {
    return (
        <div className="fixed z-50 backdrop-blur-xl flex justify-between items-center h-16 border-b border-slate-800 top-0 w-full">
            <h1 className="uppercase text-font-800 text-3xl font-mono-2 mx-10">Learn_To_Build</h1>
            <a href="https://github.com/mukulrajpoot262610/learntobuild" target="_blank">
                <h1 className="btn capitalize text-xl btn-outline border-slate-600 mx-10"><i className="fab text-2xl fa-github"></i> &nbsp; GitHub</h1>
            </a>
        </div>
    )
}

export default Navbar
