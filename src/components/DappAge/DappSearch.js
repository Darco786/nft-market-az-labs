import React from "react";
import { BsSearch } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";

function DappSearch() {
  return (
    <>
      <div className="container">
        <div className="s-box">
          <div className="s-flex-box bd-right">
            <div className="main-s-box">
              <span className="s-icon">
                {" "}
                <BsSearch />
              </span>

              <input
                type="text"
                name=""
                value=""
                placeholder="Search Pools..."
              />
            </div>
            <div className="btn-wrap">
            <a href="/" className="list-btn2">
              Live
            </a>
            <a href="/" className="list-btn2">
              Finished
            </a>
            </div>
           
          </div>
          {/* <div className="bd-right"></div> */}
          <div className="s-flex-box">
            <div className="btn-wrap">
            <a href="/" className="list-btn2">
              Farms
            </a>
            <a href="/" className="list-btn2">
              Pools
            </a>
            </div>
          
            <div className="main-s-box2">
                <div className="nnn">
                <span>
                <GiTwoCoins />
              </span>
              <p>Total Pools</p>
                </div>
             
              <h2 className="n-63">63</h2>
            </div>
          </div>

       
        </div>

        <div className="connect-grid">
        <div>
           <div class="mb-3 d-flex gap-2 align-items-center list-btn2">
             <label for="" class="form-label">Sort By : </label>
             <select class="" name="" id="">
               <option selected>Core</option>
               <option value="">New Delhi</option>
               <option value="">Istanbul</option>
               <option value="">Jakarta</option>
             </select>
           </div>
         
       </div>

       <div>
       <a href="/" className="list-btn3">
          Connect Wallet
         </a>
       </div>
        </div>
      </div>
    </>
  );
}

export default DappSearch;
