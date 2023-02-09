import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import NftBoxPage from '../components/NftBoxpage/NftBoxPage'

import NftUserHome from '../components/nftUserHome/nftUserHome'

function Home() {
  return (
    <>
    <Navbar/>
    <NftUserHome/>
    
    <NftBoxPage/>
    <Footer/>
    </>
  )
}

export default Home