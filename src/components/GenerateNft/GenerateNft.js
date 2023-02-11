import React from 'react'
import AiGenBox from './AiGenBox'
import './Gnft.css'
import UpImg from '../../assets/market/up.png'
import UpperImg from '../../assets/market/upper.png'
import CenterImg from '../../assets/market/center.png'
import RightImg from '../../assets/market/right.png'
import LeftImg from '../../assets/market/left.png'
import SideImg from '../../assets/market/side.png'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import {  BsSearch } from "react-icons/bs";

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
            <div className='ai-search-box'>
                <div className='wrap-search'>
                <span className="bar">
          <HiOutlineBars3BottomLeft />
        </span>
        <span className="fa-search2 ">
            <BsSearch />
          </span>
          <input type="text" className=" sc-input2" placeholder="Search" />

                </div>

            </div>
            </div>
            <AiGenBox/>
        </div>
        
    </section>
    </>
  )
}

export default GenerateNft