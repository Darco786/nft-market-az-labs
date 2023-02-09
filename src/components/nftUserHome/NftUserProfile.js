import React from "react";
import User_Img from'../../assets/user.png'
import Verify_img from '../../assets/verify.svg'
import NftNavList from '../NftNavList/NftNavList'

function NftUserProfile() {
  return (
    <>
      <section className="bg-profile">
        <div className="pink-blur">

        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
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
                
              </p>
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
          <NftNavList/>
        </div>
      </section>
    </>
  );
}

export default NftUserProfile;
