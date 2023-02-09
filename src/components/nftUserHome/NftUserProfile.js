import React from "react";
import User_Img from'../../assets/user.png'
import Verify_img from '../../assets/verify.svg'
import {BsGlobe,BsTwitter,BsFillShareFill,BsThreeDots} from 'react-icons/bs'
import {AiFillInstagram,AiOutlineStar} from 'react-icons/ai'

function NftUserProfile() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
                <div className="profile-box">
                    
                
              <div >
                <img src={User_Img} alt="" className="profile-img" />
              </div>
              <div className="d-flex user_name">
                <h2>Mahsa_Collection </h2> 
                <img src={Verify_img} alt="" className="verify-img"/>
              </div>
              <p className="user_details">
                Lorem ipsum dolor sit amet consectetur. Risus ut id velit
                hendrerit nunc tristique non malesuada malesuada. Eu lacus sed
                imperdiet elementum ipsum duis at ridiculus rhoncus.{" "}
              </p>
              </div>
            </div>

            <div className="col-md-6">
                <div className="share-box">
                    <div className="social-share">
                        <a href="/"><BsGlobe/></a>
                        <a href="/"><AiFillInstagram/> </a>
                        <a href="/"><BsTwitter/> </a>
                        <span href="/" style={{color:'GrayText',fontSize:'30px'}} > | </span>
                        <a href="/"><AiOutlineStar/> </a>
                        <a href="/"><BsFillShareFill/> </a>

                        <a href="/"><BsThreeDots/> </a>
                        

                        
                    </div>
                    
                </div>

                <div className="follow-box">
                  <div className="collect">
                    <span>Collectors</span>
                    <h2>159</h2>
                  </div>

                  <div className="following">
                  <span>Following</span>
                    <h2>159</h2>
                  </div>

                  <div className="followers">
                  <span>Followers</span>
                    <h2>178</h2>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NftUserProfile;
