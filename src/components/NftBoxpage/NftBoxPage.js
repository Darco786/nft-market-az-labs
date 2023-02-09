import React from "react";
import NftSearch from "../NftSearch/NftSearch";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import Nft1 from "../../assets/nfts/nft2.png";
import Nft2 from "../../assets/nfts/nft1.png";
import Nft3 from "../../assets/nfts/nft3.png";
import Nft4 from "../../assets/nfts/nft4.png";
import Nft5 from "../../assets/nfts/nft5.png";
import Nft6 from "../../assets/nfts/nft6.png";
import Nft7 from "../../assets/nfts/nft7.png";
import Nft8 from "../../assets/nfts/nft8.png";

import "./NftCard.css";

function NftBoxPage() {
  return (
    <>
      <NftSearch />
      <section className="nft-con-sec">
        <div className="container">
          <div className="nft-grid">
            {/* card-1 start */}
            <div className="nft-card-box">
              <img src={Nft1} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}

         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft2} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}



         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft3} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}



         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft4} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}



         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft5} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}


         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft6} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}


         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft7} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}


         {/* card-1 start */}
         <div className="nft-card-box">
              <img src={Nft8} alt=""  className="card-img"/>
              <div className="title">
                <h2>Purples</h2>
                <span>
                  <BsThreeDots />
                </span>
              </div>
              <span className="nft-username">@loremipsum</span>
              <div className="price">
                <p>4 ETH</p>

                <span>
                  <FaEthereum />
                </span>
              </div>
              <div className="buy-nft-box">
                <a href="/" className="btn-nft-buy">Buy Now</a>
              </div>
            </div>

 {/* card-1 end */}
          </div>
        </div>
      </section>
    </>
  );
}

export default NftBoxPage;
