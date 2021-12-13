import { useState,useEffect } from 'react';
function Cards11() {
    
    const [scroll, setScroll] = useState(true)
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
        <div id="" className="cardhover" >
            <div className="cardhover1" >
                <div className="cardhover2" >
                    <div className="cardhover6" >
                        <div className="cart-hover">
                            <ul>
                                <li>Benefits</li>
                                <li>On-time shipping</li>
                                <li>Quality protection</li>
                            </ul>
                            <button>Learn more →</button>
                        </div>
                        <div className="card-hover-span">
                            <span className="cardhoverspan" > Trade Assurance is a free order protection service offered by Alibaba.com.</span>
                        </div>
                    </div>
                    <div className="card-subtitle">
                        <div className="subtitle-image">
                        </div>
                        <div className="subtitle" >
                            <h3 className="subtitleh3" > Trade Assurance</h3>
                            <p class="subtitle2" > ORDER PROTECTION</p>
                        </div >
                    </div>
                </div>
                <div className="cardhover2" >
                    <div className="cardhover7" >
                        <div className="cardhover8" >
                            <div className="cart-hover">
                                <ul>
                                    <li>Benefits</li>
                                    <li>Global online payment</li>
                                    <li>Security compliance</li>
                                    <li>provide online refund if goods is not shipped</li>
                                </ul>
                                <button>Learn more →</button>
                            </div>




                            <div className="card-hover-span">
                                <span className="cardhoverspan" > Fast payment and settlement, supporting 6 major global card types and 21 local currencies </span>
                            </div>
                        </div>
                        <div className="card-subtitle">
                            <div className="subtitle-image2">
                            </div>
                            <div className="subtitle" >
                                <h3 className="subtitleh3" > Payment </h3>
                                <p class="subtitle2" > PAYMENT SOLUTION </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardhover2" >
                    <div className="cardhover9" >
                        <div className="cardhover10" >


                            <div className="cart-hover">
                                <ul>
                                    <li>Benefits</li>
                                    <li>Production monitoring</li>
                                    <li>On-site factory check</li>
                                    <li>Reduced risks in delays and product conformity</li>
                                </ul>
                                <button>Learn more →</button>
                            </div>
                            <div className="card-hover-span">
                                <span className="cardhoverspan" > Production monitoring and inspection services on your Alibaba.com Trade Assurance orders. </span>
                            </div>
                        </div>
                        <div className="card-subtitle">
                            <div className="subtitle-image3">
                            </div>
                            <div className="subtitle">
                                <h3 className="subtitleh3"> Inspection Solution</h3>
                                <p className="subtitle2">INSPECTION</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardhover2" >
                    <div className="cardhover11" >
                        <div className="cardhover12" >
                            <div className="cart-hover">
                                <ul>
                                    <li>Benefits</li>
                                    <li>Fast ocean and air shipping</li>
                                    <li>Competitive prices</li>
                                    <li>Online tracking</li>
                                </ul>
                                <button>Learn more →</button>
                            </div>
                            <div className="card-hover-span">
                                <span className="cardhoverspan" > Fast, reliable shipping by ocean or air </span>
                            </div>
                        </div>
                        <div className="card-subtitle">
                            <div className="subtitle-image4">
                            </div>
                            <div className="subtitle" >
                                <h3 className="subtitleh3"> Ocean and air shipping</h3>
                                <p class="subtitle2" > LOGISTICS SERVICE </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards11