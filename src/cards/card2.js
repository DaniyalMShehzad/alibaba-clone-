function Card2() {
    const arr = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        }
    ]
    const arr2 = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        }
    ]
    const arr3 = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        }
    ]
    // },
    const arr4 = [

        {
            img: "https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/Hdd812c517ee64df08f9851a9fc984fd38.jpg_100x100xz.jpg",
        }
    ]

    return (
        <div className="grid">
            <div className="grid2">
                <div className="grid8">
                    <h1>Customized products</h1>
                    <br />
                    <p className="gridp" >Partner with one of 60,000 experienced manufacturers with <br /> design & production capabilities</p>
                    <div className="grid6">
                        <div className="gridchild">
                            <h4>Premium OEM Factories</h4>
                            <div className="grid4">
                                {arr.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="gridchild">
                            <h4>Top-ranking suppliers</h4>
                            <div className="grid4">
                                {arr2.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid3">
                    <h1>Ready-to-ship products</h1>
                    <br />
                    <p className="gridp" >Source from 15 million products that are ready to ship,<br /> and leave the facility within 15 days.</p>
                    <div className="grid6">
                        <div className="gridchild2">
                            <h4>Fast Dispatch</h4>
                            <div className="grid4">
                                {arr3.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="gridchild2">
                            <h4>Weekly Deals</h4>
                            <div className="grid4">
                                {arr4.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2