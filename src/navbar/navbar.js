import * as React from 'react';
import img  from "../img/img.jpg"

export default function DenseAppBar() {
  return (
      <>
      <div className="nav1">
          <div className="nav2">
              <img className="img" src={img}/>
          </div>
          <div className="nav3">
              <select className="select">
                  <option className="products">Products</option>
                  <option className="products">suppliers</option>
              </select>
              <input className="inp" type="text" placeholder="What are you looking for"/>
            <button className="btn">Search</button>
            </div>
          <div className="nav4">
          {/* <i className="fa-solid fa-arrow-right-to-bracket" ></i> */}
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Sign In Join Free</span>
          <i className="fa-solid fa-message"></i>
          <span>Messages</span>
          </div>
      </div>
      <div className="nav5"></div>
      </>
  );
}