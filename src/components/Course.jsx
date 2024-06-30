import React from 'react';
import { Cards } from './Cards';
import list from "../../public/data/list.json"
import {Link} from "react-router-dom"

export const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
          <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis ultricies lectus, tincidunt porttitor ante dapibus eget. Etiam pharetra, orci in sodales luctus, felis justo rhoncus eros, sed sollicitudin nisl augue accumsan diam. Sed tellus justo, malesuada et finibus eu, dictum finibus orci. Ut ac lacinia tellus. Nulla ut massa eleifend, mollis leo sit amet, vestibulum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            <Link to="/">
              <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>

          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
              list.map((item) => (
                <Cards key={item.id} item = {item}/>
              ))
            }
          </div>
      </div>
    </>
  )
}
