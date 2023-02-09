import React from 'react'
import NftUserProfile from './NftUserProfile'
import './UserBanner.css'
function NftUserHome() {
  return (
    <>
    <section className='user_head_banner'>
        <div className='edit-box'>
            <button className='btn-edit'>Edit</button>
        </div>
    </section>
    <NftUserProfile/>
    </>
  )
}

export default NftUserHome