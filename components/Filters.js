import React from 'react'
import LIST from '../public/filters.list'

const Filters = () => {
    return (
        <div>
            <div className="artboard artboard-demo bg-primary">
                <p className="font-mono-2 uppercase text-2xl">Technologies</p>
                <ul className="menu px-3 shadow-lg bg-base-200 p-2 rounded-box horizontal flex flex-wrap justify-center">
                    {LIST[0].WEB.map((x, i) => <li key={i} className="p-2 px-4 cursor-pointer hover:bg-secondary rounded-2xl">
                        {x}
                    </li>)}
                </ul>
            </div>

        </div>
    )
}

export default Filters
