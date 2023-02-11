import React from 'react'
import AiGenBox from './AiGenBox'
import './Gnft.css'
import UpImg from '../../assets/market/up.png'
import UpperImg from '../../assets/market/upper.png'
import CenterImg from '../../assets/market/center.png'
import RightImg from '../../assets/market/right.png'
import LeftImg from '../../assets/market/left.png'
import SideImg from '../../assets/market/side.png'

function GenerateNft() {
  return (
    <>
       <img src={UpImg} alt="" className="up-market"/>
    <img src={UpperImg} alt="" className="upper-market"/>
    <img src={CenterImg} alt="" className="center-market"/>
    <img src={RightImg} alt="" className="right-market"/>
    <img src={LeftImg} alt="" className="left-market"/>
    <img src={SideImg} alt="" className="Side-market"/>
    <section className='gen-a'>
        <div className='generate-sec'>
            <div class="container">
            
            </div>
            <AiGenBox/>
        </div>
        
    </section>
    </>
  )
}

export default GenerateNft