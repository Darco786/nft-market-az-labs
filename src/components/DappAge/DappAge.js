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
    
    <div className='nft-home-box' style={{marginBottom:'50%'}}>
      <DappSearch/>
      <DappBoxes/>

      </div>
      </>
  )
}

export default DappAge