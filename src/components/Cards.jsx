import React from 'react'

export const Cards = ({item}) => {
  return (
    <>
        <div className='mt-4'>
            <div className="w-80 h-96 card bg-base-100 shadow-xl mt-5 mb-10 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                    src={item.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="px-3 py-3 badge badge-outline">{`$ ${item.price}`}</div>
                        <div className="border-[2px] rounded-full px-3 py-3 badge badge-outline hover:text-pink-500 hover:bg-purple-950 hover:cursor-pointer">Buy Now!</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}