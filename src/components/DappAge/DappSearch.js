import React from 'react'
import { BsSearch } from 'react-icons/bs'

function DappSearch() {
  return (
    <>
    <div className='container'>
        <div className='s-box'>
            <div className='s-flex-box'>
                <div className='main-s-box'>
                    <span> <BsSearch/></span>
                   
                    <input type="text" name="" value="" placeholder='Search Pools...'/>

                </div>
                <a href="/" className='list-btn'>Live</a>
                <a href="/" className='list-btn'>Finished</a>
            </div>
            <div></div>
            <div className='s-flex-box'>
           
                <a href="/" className='list-btn'>Farms</a>
                <a href="/" className='list-btn'>Pools</a>
                <div className='main-s-box'>
                    <input type="text" name="" value=""/>

                </div>
            </div>

        </div>
        </div>
    
    </>
  )
}

export default DappSearch