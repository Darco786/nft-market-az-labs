import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import NftBoxPage from '../components/NftBoxpage/NftBoxPage'

import NftUserHome from '../components/nftUserHome/nftUserHome'

function Profile() {
  return (
    <>
    <Navbar/>
    <NftUserHome/>
    
    <NftBoxPage/>
    <Footer/>
    </>
  )
}

export default Profile