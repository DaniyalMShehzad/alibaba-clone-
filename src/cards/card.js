function Cards() {



    const arr = [
        {
            value: "Trending Now",
            img: "https://s.alicdn.com/@sc04/kf/Hf945bf555b9546679f4b77d6af80f328i.jpg_120x120.jpg",
            price: "221.27",
        },
        {
            value: "Trending Now",
            img: "https://s.alicdn.com/@sc04/kf/Hba7674425abf454b91fe313116799b0es.jpg_120x120.jpg",
            price: "684.39",
        },
        {
            value: "Trending Now",
            img: "https://s.alicdn.com/@sc04/kf/Hf550a1661a4e4870924d10ad8021fc50m.jpg_120x120.jpg",
            price: "660.38",
        }
    ]
    const arr2 = [
        {
            value: "One piece",
            img: "https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg",
            price: "6782.10",
        },
        {
            value: "One piece",
            img: "https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg",
            price: "411.66",
        },
        {
            value: "One piece",
            img: "https://s.alicdn.com/@sc04/kf/Hfa3a1d7b61ec4123abeb7f31a5e58af74.jpg_120x120xz.jpg",
            price: "13121.67",
        }
    ]
    const arr3 = [
        {
            img: "https://s.alicdn.com/@sc04/kf/H33b294727cb1428ab1d221b9222a83a9n.jpg_120x120xz.jpg",
            price: "2401.35",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/H8f6bea6687774ffeb2d68f4019e9fa1bf.jpg_120x120xz.jpg",
            price: "188.68",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/H5a7f4c993b1e4450adeec77c26dcc403W.jpg_120x120xz.jpg",
            price: "55.75",
        }
    ]
    const arr4 = [
        {
            value: "1 pair",
            img: "https://s.alicdn.com/@sc04/kf/H658f209c945d49d6a32d5649243945252.jpg_120x120xz.jpg",
            price: "2677.77",
        },
        {
            value: "1 pair",
            img: "https://s.alicdn.com/@sc04/kf/Hbf5b06a9f6ff47f29269d1339c76825d7.png_120x120xz.jpg",
            price: "341.34",
        },
        {
            value: "1 pair",
            img: "https://s.alicdn.com/@sc04/kf/Hbd9fa7e8c0ec47ac9da77be5d7ae3712h.jpg_120x120xz.jpg",
            price: "531.73",
        }]
    const arr5 = [
        {
            value: "1 peice",
            img: "https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg",
            price: "7301.35",
        },
        {
            value: "1 peice",
            img: "	https://s.alicdn.com/@sc04/kf/H524face07b6f4e77866abab13e408ef4M.jpg_120x120xz.jpg",
            price: "377.36",
        },
        {
            value: "1 peice",
            img: "	https://s.alicdn.com/@sc04/kf/Hc622bbe7815641b88b471b71dedb91b8i.jpg_120x120xz.jpg",
            price: "341.34",
        }
    ]
    const arr6 = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/H222d522dde1f41a0a117ba76ec73a700B.jpg_120x120xz.jpg",
            price: "504.29",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hb44e39dcf9714bbe88e0118e9133f37ad.jpg_120x120xz.jpg",
            price: "4974.23",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/Hbffdccecef044be49fdd7039e1207195l.jpg_120x120xz.jpg",
            price: "1.72",
        },
    ]
    console.log(arr);

    return (
        <div className="main">
            <div className="card">
                <div className="parent">
                    <div className="head-parent">
                        <img className="parent-img" src="https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png" />
                        <h4>New Arrivals</h4>
                    </div>
                    <div className="parent4">
                        {arr.map((e, i) => {
                            return (
                                <div className="key product" key={i}>
                                    <img className="key4img" src={e.img} />
                                    <p className="price"><br />{e.price}</p>
                                    <p className="value"><br />{e.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="parent">
                    <div className="head-parent">
                        <img className="parent-img" src="https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png" />
                        <h4>Top-ranked Products</h4>
                    </div>
                    <div className="parent4">
                        {arr2.map((e, i) => {
                            return (
                                <div className="key product" key={i}>
                                    <img className="key4img" src={e.img} />
                                    <p className="price"><br />{e.price}</p>
                                    <p className="value"><br />{e.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="parent">
                    <div className="head-parent">
                        <img className="parent-img" src="https://img.alicdn.com/imgextra/i2/O1CN01m3E6Kp1nx2NbudQJI_!!6000000005155-2-tps-60-60.png" />
                        <h4>Personal Protective Equipment</h4>
                    </div>
                    <div className="parent4">
                        {arr3.map((e, i) => {
                            return (
                                <div className="key2 product" key={i}>
                                    <img className="key4img" src={e.img} />
                                    <p className="price"><br />{e.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="parent2">
                    <div className="head-parent">
                        <img className="parent-img" src="https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg" />
                        <h4>Dropshipping</h4>
                    </div>
                    <div className="parent5">
                        {arr4.map((e, i) => {
                            return (
                                <div className="key product" key={i}>
                                    <img className="key4img" src={e.img} />
                                    <p className="price"><br />{e.price}</p>
                                    <p className="value"><br />{e.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="parent2">
                    <div className="head-parent">
                        <img className="parent-img" src="https://img.alicdn.com/tfs/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png" />
                        <h4>Global Original Sources</h4>
                    </div>
                    <div className="parent5">
                        {arr5.map((e, i) => {
                            return (
                                <div className="key product" key={i}>
                                    <img className="key4img" src={e.img} />
                                    <p className="price"><br />{e.price}</p>
                                    <p className="value"><br />{e.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="parent2">
                    <div className="head-parent">
                        <img className="parent-img" src="	https://img.alicdn.com/imgextra/i4/O1CN01caWYqW1cVasvCBKJ2_!!6000000003606-0-tps-46-32.jpg" />
                        <h4> True View</h4>
                    </div>
                    <div className="parent5">
                        {arr6.map((e, i) => {
                            return (
                                <div className="key2 product" key={i}>
                                    <img className="key4img" src={e.img} />
                                    <p className="price"><br />{e.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards