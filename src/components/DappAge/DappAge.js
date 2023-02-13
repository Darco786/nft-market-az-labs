import React from 'react'
import './Dapp.css'
import DappBoxes from './DappBoxes'
import DappSearch from './DappSearch'

function DappAge() {
  return (
    <>
    <section className='dapp-bg'>
      
      <div className='container'>

      </div>
      
    </section>
    
    <div className='nft-home-box' style={{paddingBottom:'15%',marginTop:'-2%'}}>
      <DappSearch/>
      <DappBoxes/>

      </div>
      </>
  )
}

export default DappAge