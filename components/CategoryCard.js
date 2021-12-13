import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ data }) => {

    const { name, desc, link, thumbnail } = data

    return (
        <Link href={`projects/${link}`}>
            <div className="flex flex-col justify-center items-center border border-slate-700 m-2 p-4 rounded-2xl hover:border-slate-500 shadow-2xl cursor-pointer w-full max-w-screen-sm">
                <img src={thumbnail} className="w-80 my-6" />
                <div>
                    <h1 className="my-3 font-bold text-2xl">{name}</h1>
                    <p className="text-lg text-font-100">{desc}</p>
                </div>
                <h1 className="text-xl self-end text-green-500"><i className="fas fa-arrow-right"></i></h1>
            </div>
        </Link>
    )
}

export default CategoryCard
