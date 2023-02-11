import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import MarketNftBoxes from "./MarketNftBoxes";
import './mNft.css'
import NftSearchBlock from "./NftSearchBlock";
import UpImg from '../../assets/market/up.png'
import UpperImg from '../../assets/market/upper.png'
import CenterImg from '../../assets/market/center.png'
import RightImg from '../../assets/market/right.png'
import LeftImg from '../../assets/market/left.png'
import SideImg from '../../assets/market/side.png'

function MarketNft() {
  return (
    <>
    <img src={UpImg} alt="" className="up-market"/>
    <img src={UpperImg} alt="" className="upper-market"/>
    <img src={CenterImg} alt="" className="center-market"/>
    <img src={RightImg} alt="" className="right-market"/>
    <img src={LeftImg} alt="" className="left-market"/>
    <img src={SideImg} alt="" className="Side-market"/>
      <section className="sec-home-nft">
        <div className="container-fluid">
          <div className="nft-home-box">
            <ul className="nft-btn-list">
              <li>
                <a href="/" className="list-btn-active">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="list-btn">
                  Analyze
                </a>
              </li>
              <li>
                <a href="/" className="list-btn">
                  Related
                </a>
              </li>
              <li>
                <a href="/" className="list-btn">
                  Play
                </a>
              </li>
            </ul>

            {/* search box */}
            <div className="container d-flex gap-5 pt-40">
            <div className="align-items-center">
              <p className="count-p">
               <span className="green"><GoPrimitiveDot /></span>  45,180 Characters
              </p>
              <p className="count-sec">31 seconds ago</p>
            </div>
            <div className="main-search-box">
              <NftSearchBlock/>
            </div>
          </div>
          <MarketNftBoxes />
          </div>
         
        </div>
      </section>
      
    </>
  );
}

export default MarketNft;
