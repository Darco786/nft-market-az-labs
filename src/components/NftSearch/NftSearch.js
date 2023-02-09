import React from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { BsGrid3X3, BsGrid1X2, BsSearch } from "react-icons/bs";
import { RxGrid } from "react-icons/rx";
import "./Search.css";

function NftSearch() {
  return (
    <section className="sc-box">
      <div className="container">
        <div className="search-bar-box">
          <div className="d-flex gap-5">
            <span className="bar">
              <HiOutlineBars3BottomLeft />
            </span>
            <div className="form-group has-search">
              <span className="fa fa-search ">
                <BsSearch />
              </span>
              <input type="text" className=" sc-input" placeholder="Search" />
            </div>
         
          </div>
        
          <div className="filter-box">
            <select class="filter-select" aria-label="Default select example">
              <option selected>Low to High</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>

          <div className="grid-box">
            <div className="g1">
              <BsGrid3X3 />
            </div>
            <div className="g2">
              <RxGrid />
            </div>
            <div className="g1">
              <BsGrid1X2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftSearch;
