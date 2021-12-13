import * as React from 'react';
import img from "../img/img.jpg"
import { useState, useEffect } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import Signin from './dropdown2/sign in';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Signin from './dropdown2/sign in';
import Signin2 from './dropdown2/signin2';
import Signin3 from './dropdown2/signin3';
import Signin4 from './dropdown2/signin4';
export default function DenseAppBar() {
    // const [scrolling,setScrolling] =useState();
    // window.addEventListener("scroll",(move)=>{
    //     console.log(window.scrollY);
    // })

    const [scroll, setScroll] = useState(true)

    // else{
    //     navbar.classList.remove('navbar');
    //     Navbar2.classList.remove('navbar2');
    //     navbar3.classList.remove('navbar3');
    // }
    //   })
    useEffect(() => {
        setTimeout(() => {

            document.addEventListener("scroll", () => {
                let navbarhead = document.getElementById("navbarhead")
                let navbar = document.getElementById("navbar")
                let navbar2 = document.getElementById("navbar2")
                let navbar3 = document.getElementById("navbar3")
                let navbar4 = document.getElementById("navbar4")
                let navbar5 = document.getElementById("navbar5")
                let navbar6 = document.getElementById("navbar6")
                const scrollCheck = window.scrollY < 100
                if (scrollCheck !== scroll) {
                    console.log(scrollCheck);
                    navbarhead.classList.add('navbarhead');
                    //   navbar.addEventListener("scroll",(e)=>{ 
                    navbar.classList.add('navbar');
                    navbar2.classList.add('navbar2');
                    navbar3.classList.add('navbar3');
                    navbar4.classList.add('navbar4');
                    navbar5.classList.add('navbar5');
                    navbar6.classList.add('navbar6');
                    //   setScroll(scrollCheck)
                }
                else {
                    navbarhead.classList.remove("navbarhead")
                    navbar.classList.remove("navbar")
                    navbar2.classList.remove("navbar2")
                    navbar3.classList.remove("navbar3")
                    navbar4.classList.remove("navbar4")
                    navbar5.classList.remove("navbar5")
                    navbar6.classList.remove("navbar6")
                }
            })
        }, 2000)
    }, [])
    return (
        <>
            <div id="navbarhead" className='nav1'>
                <div id="navbar" className="nav2">
                    <img className="img" src={img} />
                </div>
                <div id="navbar3" className="nav3">
                    <select id="navbar5" className="select">
                        <option className="products">Products</option>
                        <option className="products">suppliers</option>
                    </select>
                    <input id="navbar6" className="inp" type="text" placeholder="What are you looking for" />
                    <button id="navbar4" className="btn">Search</button>
                </div>
                <div id="navbar2" className="nav4">
                    <Signin/>
                    <Signin2/>
                    <Signin3/>
                    <Signin4/>
                    {/* <div className="logo-2">
                        <i className="fa-solid fa-message"></i>
                        <div className="btnlogo-2">
                            <span className="span-text">Messages</span>
                        </div>
                    </div>
                    <div className="logo-2">
                        <button className="logobuttons-1">$</button>
                        <div className="btnlogo-3">
                            <span className="span-text">Orders</span>
                        </div>
                    </div>
                    <div className="logo-2">
                        <div className="btnlogo-4">
                            <span className="span-text">Cart</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}