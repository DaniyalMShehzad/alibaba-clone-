function Card10() {
    const arr = ["Cocktail Shaker set 10 pieces from  I***** received 7 quotation(s)",
        // "1.3mL U bottom deep well 96 well plate(Sterile) from  W***** received 3 quotation(s)",
        // "Custom backpack/shoulder bag from  S***** received 7 quotation(s)",
        // "i need countertop soft ice cream machine from  C***** received 5 quotation(s)",
        // "self drilling screw from  B***** received 9 quotation(s)",
        // "ABS SENSOR A0075427218 0075427218 FOR MERCEDES TRUCK from  D***** received 4 quotation(s)",
        // "Dark/Ebony Wood Cutting board from  U***** received 4 quotation(s)",
    ]

    const names = [
        "Digital Lighters & Parts",
        "Electronic Organizers",
        "Computer Hardware & Software",
        "All in One Computers",
        "Blank Disks",
        "CPUs",
        "Computer Cases & Towers",
        "Desktops",
        "Fans & Cooling",
        "Electronic Cigarettes",
        "Box Mod",
        "Electronic Cigarette Accessories",
        "Heat not burn",
        "Herb Vaporizers",
        "Other Electronic Cigarettes",
        "Vape pen",
        "Earphone & Headphone",
        "Earphone Accessories",
        "Earphones & Headphones"
    ];

    return (
        <div className="consumer">
            <div className="consumer2">
                <div className="CONSUMER1">
                    <img className="consumerimg" src="https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png" />
                    <h4 class="headerTitle4">REQUEST FOR QUOTATION</h4>
                    <span>Customization Service</span>
                    <span></span>
                    <div class="label3"></div>
                </div>
            </div>
            <div className="consumer5">
                <div className="consumer3">
                    <h3 class="consth4">Global Sourcing Marketplace</h3>
                    <div className="consumerspan">
                        <div className="consumerspan1">
                            <span className="constspan">1906000 +</span>
                            <span className="constspan">22h</span>
                        </div>
                        <div className="consumerspan1">
                            <span className="constspan5">RFQs</span>
                            <span className="constspan5">Avg Quotation Duration</span>
                        </div>
                        <div className="consumerspan1">
                            <span className="constspan">177000 +</span>
                            <span className="constspan">5925</span>
                        </div>
                        <div className="consumerspan1">
                            <span className="constspan5">Active Suppliers</span>
                            <span className="constspan5">Industries</span>
                            <button className="constbtn2">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="consumer4">
                    <h3 className="consth3">One Request, Multiple Quotes</h3>
                    <div>
                        {arr.map((e, i) => {
                            return (
                                <p key={i}>{e}</p>
                            )
                        })}
                    </div>
                    <div>
                        <input className="constinp" type="text" placeholder="What are you looking for" />
                    </div>
                    <div >
                        <input className="constinp2" type="number" placeholder="Quantity" />
                        <select className="consumer7">
                            {names.map((e, i) => {
                                return (
                                    <option key={i} className="consumer8">{e}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="const1">
                        <button className="consbtn">Request For Quotions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card10