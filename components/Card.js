import React from 'react'

const Card = () => {
    return (
        <div className="border border-slate-700 m-2 p-4 rounded-2xl hover:border-slate-500 shadow-2xl cursor-pointer w-80">
            <h1 className="border border-slate-700 rounded-full inline-block px-6 p-2 mb-2 text-sm text-font-100">YouTube</h1>
            <img src="https://img.youtube.com/vi/mDgEqoQUBgk/mqdefault.jpg" className="w-72 rounded-xl border border-slate-700" />
            <h1 className="my-2 font-bold text-base hover:text-blue-300">Create an Instagram Clone with React, Tailwind CSS, Firebase - Tutorial</h1>

            <h1 className="mt-2 text-font-100">Tech Used</h1>
            <div className="flex mb-2 flex-wrap items-start">
                <i className="fab fa-react text-xl m-1"></i>
                <i className="fab fa-react text-xl m-1"></i>
                <i className="fab fa-react text-xl m-1"></i>
                <i className="fab fa-react text-xl m-1"></i>
            </div>
            <hr className="my-2 text-slate-700" />
            <div className="flex justify-between items-center">
                <h1 className="text-md text-green-500">Easy</h1>
                <h1 className="text-md text-green-500"><i className="fas fa-arrow-right"></i></h1>
            </div>
        </div>
    )
}

export default Card
