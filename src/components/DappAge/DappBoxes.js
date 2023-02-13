import React from "react";
import Line from "../../assets/dapp.png";
import Prof from "../../assets/pro.png";
import { MdVerified } from "react-icons/md";

function DappBoxes() {
  return (
    <>
      <div className="container">
        <div className="stake-list">
          <ul>
            <li>Stake Earn</li>
            <li>Earning Amount</li>
            <li>Total Staked</li>
            <li>APR</li>
            <li>Ends in</li>
          </ul>
          <img src={Line} alt="" />
        </div>

        <section>
          <div className="container">
            <div className="stake-box">
              <div className="sub-stake-box">
                <img src={Prof} alt="" />
                <p>BabyDoge</p>
                <p>0.00 USD</p>
                <p>4,284,630,125,780,196</p>
                <p>61%</p>
                <p>56 Days</p>
                <a href="/" className="core-btn">
                  <span className="vr-sk">
                    <MdVerified />
                  </span>
                  Core
                </a>
                <a href="/" className="stake-connect">
                  Connect Wallet
                </a>
              </div>
            </div>

            <div className="stake-box">
              <div className="sub-stake-box">
                <img src={Prof} alt="" />
                <p>BabyDoge</p>
                <p>0.00 USD</p>
                <p>4,284,630,125,780,196</p>
                <p>61%</p>
                <p>56 Days</p>
                <a href="/" className="core-btn">
                  <span className="vr-sk">
                    <MdVerified />
                  </span>
                  KYCd
                </a>
                <a href="/" className="stake-connect">
                  Connect Wallet
                </a>
              </div>
              <div className="more-stake-box">
                <div className="grid-more">
                    <div className='depo-g'>
                        <h2>My Deposit: <span className='baby-d'> 0 BabyDoge </span></h2>

                       <span className='baby-g'> Get  BabyDoge</span>
                    </div>

                </div>

                <div className="grid-more">
                    <div className='depo-g'>
                        <h2>Early Withdraw Fee:  <span className='baby-d'> 0% </span></h2>

                       <span className='baby-g'> See Token Info</span>
                    </div>

                </div>


                <div className="grid-more">
                    <div className='depo-g'>
                        <h2>SWEEP Earned:  <span className='baby-d'> 0 USD </span></h2>

                       <span className='baby-g'> Harvest</span>
                    </div>

                </div>


                <div className="grid-more">
                    <div className='depo-g'>
                        <h2>Minimum Lock Time:  <span className='baby-d'> No Minimum</span></h2>

                       <span className='baby-g'> View Contract</span>
                    </div>

                </div>

                <div className="grid-more">
                    <div className='depo-g'>
                        <h2>Maximum Stake Per User:  <span className='baby-d'> 2000000000.0 </span></h2>

                       {/* <span className='baby-g'> Get  BabyDoge</span> */}
                    </div>

                </div>
              </div>
            </div>

            <div className="stake-box">
              <div className="sub-stake-box">
                <img src={Prof} alt="" />
                <p>BabyDoge</p>
                <p>0.00 USD</p>
                <p>4,284,630,125,780,196</p>
                <p>61%</p>
                <p>56 Days</p>
                <a href="/" className="core-btn">
                  <span className="vr-sk">
                    <MdVerified />
                  </span>
                  Core
                </a>
                <a href="/" className="stake-connect">
                  Connect Wallet
                </a>
              </div>
            </div>

            <div className="stake-box">
              <div className="sub-stake-box">
                <img src={Prof} alt="" />
                <p>BabyDoge</p>
                <p>0.00 USD</p>
                <p>4,284,630,125,780,196</p>
                <p>61%</p>
                <p>56 Days</p>
                <a href="/" className="core-btn">
                  <span className="vr-sk">
                    <MdVerified />
                  </span>
                  Core
                </a>
                <a href="/" className="stake-connect">
                  Connect Wallet
                </a>
              </div>
            </div>

            <div className="stake-box">
              <div className="sub-stake-box">
                <img src={Prof} alt="" />
                <p>BabyDoge</p>
                <p>0.00 USD</p>
                <p>4,284,630,125,780,196</p>
                <p>61%</p>
                <p>56 Days</p>
                <a href="/" className="core-btn">
                  <span className="vr-sk">
                    <MdVerified />
                  </span>
                  Core
                </a>
                <a href="/" className="stake-connect">
                  Connect Wallet
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DappBoxes;
