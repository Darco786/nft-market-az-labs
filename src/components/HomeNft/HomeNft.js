import React from 'react'
import './HomeNft.css'
import NftGallary from './NftGallary'

function HomeNft() {
  return (
    <>
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