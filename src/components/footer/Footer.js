import React from 'react'
import Logo from '../../assets/footLogo.png'
import './Footer.css'

import {BsFacebook,BsTwitter,BsDiscord} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <>
    <div className='foot-img-logo'>
        <img src={Logo} alt="Foot"/>
    </div>
    <footer>
        <div className='container'>
            <div className='footer-grid'>
                <div className='copy-right'>
                    <h2>NSFW @2023 ALL RIGHTS RESERVED</h2>
                </div>

                <div className='foot-menu'>
                    <div className='foot-menu-box'>
                        <a href="/">HOME</a>
                        <a href="/">MARKETPLACE</a>
                        <a href="/">GENERATE</a>
                    </div>

                </div>
                <div className='foot-icon'>
                    <a href="/"><BsFacebook/></a>
                    <a href="/"><BsTwitter/></a>
                    <a href="/"><BsDiscord/></a>
                    <a href="/"><AiFillInstagram/></a>
                    

                    
                </div>

            </div>

        </div>
    </footer>
    
    </>
  )
}

export default Footer