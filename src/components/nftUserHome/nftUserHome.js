import React from 'react'
import NftUserProfile from './NftUserProfile'
import './UserBanner.css'
import Line1 from '../../assets/line3.png'
import Line2 from '../../assets/line4.png'
import Line3 from '../../assets/line1.png'
import Line4 from '../../assets/line2.png'

function NftUserHome() {
  return (
    <>
    <section className='user_head_banner'>

      <div className='side-border'>
        <img src={Line1} alt=""/>
        <img src={Line2} alt=""/>

      </div>

      <div className='side-border2'>
        <img src={Line3} alt=""/>
        <img src={Line4} alt=""/>

      </div>
      
    </section>
    <NftUserProfile/>
    </>
  )
}

export default NftUserHome