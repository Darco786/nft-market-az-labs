import React from 'react'
import './Dapp.css'
import DappBoxes from './DappBoxes'
import DappSearch from './DappSearch'
import RightLine from '../../assets/rightLine.svg'
import LeftLine from '../../assets/leftLine.svg'

function DappAge() {
  return (
    <>
    <section className='dapp-bg'>
      
      <div className='container'>

      </div>
      
    </section>
    
    <div className='nft-home-box dapp-home-box' style={{paddingBottom:'15%',marginTop:'-2%'}}>
      <DappSearch/>
      <DappBoxes/>
      <div>
        <img src={RightLine} alt="" className='Right-line'/>
        <img src={LeftLine} alt="" className='Left-line'/>
      </div>
      </div>
    
      </>
  )
}

export default DappAge