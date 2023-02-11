import React from 'react'
import Img1 from '../../assets/gallary/gal1.png'
import Img2 from '../../assets/gallary/gal2.png'
import Img3 from '../../assets/gallary/gal3.png'
import Img4 from '../../assets/gallary/gal4.png'
import Img5 from '../../assets/gallary/gal5.png'
import Img6 from '../../assets/gallary/gal6.png'
import Img7 from '../../assets/gallary/gal7.png'
import Img8 from '../../assets/gallary/gal8.png'
import Img9 from '../../assets/gallary/gal9.png'
import Img10 from '../../assets/gallary/gal10.png'
import Img11 from '../../assets/gallary/gal11.png'
import Img12 from '../../assets/gallary/gal12.png'
import Img14 from '../../assets/gallary/gal14.png'

function NftGallary() {
  return (
    <>
   
    <section className='sc-gal'>
        <div className='container'>


            <div className='nft-gallery-1'>
              <div>
              <img src={Img1} alt=""/>
            <img src={Img2} alt=""/>
              </div>
            <div>
            <img src={Img3} alt=""/>
            <img src={Img4} alt=""/>
            <img src={Img6} alt=""/>
            </div>
            <div>
            <img src={Img7}alt=""/>
            <img src={Img5} alt="" className='gal-5'/>
            </div>
     

            </div>


            <div className='nft-gallery-1'>
              <div>
              <img src={Img8} alt=""/>
            <img src={Img9} alt=""/>
           
              </div>
            <div>
            <img src={Img10} alt=""/>
            <img src={Img11} alt="" className='gal-10'/>
           
            </div>
            <div>
            <img src={Img12} alt="" />
            <img src={Img14} alt=""/>
           
            </div>
     

            </div>

        </div>

    </section>
    
    
    </>
  )
}

export default NftGallary