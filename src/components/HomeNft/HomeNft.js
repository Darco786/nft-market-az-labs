import React from 'react'
import './HomeNft.css'
import NftGallary from './NftGallary'
import UpImg from '../../assets/market/up.png'
import UpperImg from '../../assets/market/upper.png'
import CenterImg from '../../assets/market/center.png'
import RightImg from '../../assets/market/right.png'
import LeftImg from '../../assets/market/left.png'
import SideImg from '../../assets/market/side.png'

function HomeNft() {
  return (
    <>
      <img src={UpImg} alt="" className="up-market"/>
    <img src={UpperImg} alt="" className="upper-market"/>
    <img src={CenterImg} alt="" className="center-market"/>
    <img src={RightImg} alt="" className="right-market"/>
    <img src={LeftImg} alt="" className="left-market"/>
    <img src={SideImg} alt="" className="Side-market"/>
    <section className='sec-home-nft'>
        <div className='container-fluid'>
            <div className='nft-home-box'>
                <ul className='nft-btn-list'>
                    <li><a href="/" className='list-btn'>Fantasy Art</a></li>
                    <li><a href="/" className='list-btn'>Anime</a></li>
                    <li><a href="/" className='list-btn'>Characters</a></li>
                    <li><a href="/" className='list-btn'>Landscape</a></li>
                    <li><a href="/" className='list-btn'>Cyberpunk</a></li>
                    <li><a href="/" className='list-btn'>Space</a></li>
                    <li><a href="/" className='list-btn'>Painting</a></li>
                    <li><a href="/" className='list-btn'>Pop Art</a></li>
                    <li><a href="/" className='list-btn'>Cubism</a></li>
                    <li><a href="/" className='list-btn'>Architecture</a></li>
                    <li><a href="/" className='list-btn'>Interior design</a></li>
                    
                </ul>

                <div>
                  <NftGallary/>
                </div>

            </div>


        </div>
    </section>
    </>
  )
}

export default HomeNft