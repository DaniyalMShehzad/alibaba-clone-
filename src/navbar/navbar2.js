import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';
function Navbar2() {
    // state = {
    //     current: 'mail',
    //   };
    const [current, setCurrent] = useState("mail");
    const { SubMenu } = Menu;

    const handleClick = (e) => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    return (
        <>
            <div className="trade3">
                <div className="options">
                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <SubMenu className="select" key="SubMenu" icon={<SettingOutlined />} title="Categories">
                            <SubMenu className="select" key="setting:1" title="Machinery / Vehicles & Accessories">
                                <Menu.Item className="opt" key="1"> Machinery</Menu.Item>
                                <Menu.Item className="opt" key="2">Agricultural Machinery & Equipment</Menu.Item>
                                <Menu.Item className="opt" key="3">Apparel & Textile Machinery</Menu.Item>
                                <Menu.Item className="opt" key="4">Building Material Machinery</Menu.Item>
                                <Menu.Item className="opt" key="5">Chemical & Pharmaceutical Machinery</Menu.Item>
                                <Menu.Item className="opt" key="6">Cleaning Equipment</Menu.Item>
                                <Menu.Item className="opt" key="7">Electric Equipment Making Machinery</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Vehicles & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="10">ATV/UTV Parts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="11">Automotive Parts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Aviation Parts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="13">Bus Parts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="14">Container Parts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="15">Go Kart & Kart Racer Parts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:2" title="Consumer Electronics / Home Appliances">
                                <Menu.Item className="opt" key="1">Consumer Electronics</Menu.Item>
                                <Menu.Item className="opt" key="2">Blockchain Miners</Menu.Item>
                                <Menu.Item className="opt" key="3">Camera, Photo & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="4">Chargers,Batteries & Power Supplies</Menu.Item>
                                <Menu.Item className="opt" key="5">Commonly Used Accessories & Parts</Menu.Item>
                                <Menu.Item className="opt" key="6">Computer Hardware & Software</Menu.Item>
                                <Menu.Item className="opt" key="7">Earphone & Headphone</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Home Appliances</Menu.Item>
                                <Menu.Item className="opt" key="10">Air Conditioning Appliances</Menu.Item>
                                <Menu.Item className="opt" key="11">Cleaning Appliances</Menu.Item>
                                <Menu.Item className="opt" key="12">Home Appliance Parts</Menu.Item>
                                <Menu.Item className="opt" key="13">Home Appliances Stocks</Menu.Item>
                                <Menu.Item className="opt" key="14">Home Heaters</Menu.Item>
                                <Menu.Item className="opt" key="15">Laundry Appliances</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:3" title="Apparel / Fashion Accessories / Timepieces,Jewelry,Eyewear">
                                <Menu.Item className="opt" key="1">Apparel</Menu.Item>
                                <Menu.Item className="opt" key="2">Men's Clothing</Menu.Item>
                                <Menu.Item className="opt" key="3">Women's Clothing</Menu.Item>
                                <Menu.Item className="opt" key="4">Sportswear</Menu.Item>
                                <Menu.Item className="opt" key="5">Garment & Processing Accessories</Menu.Item>
                                <Menu.Item className="opt" key="6">Wedding Apparel & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Made In Italy</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Fashion Accessories</Menu.Item>
                                <Menu.Item className="opt" key="1">Belts & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="11">Ear Muffs</Menu.Item>
                                <Menu.Item className="opt" key="12">Gloves & Mittens</Menu.Item>
                                <Menu.Item className="opt" key="13">Hair Accessories</Menu.Item>
                                <Menu.Item className="opt" key="14">Hats & Caps</Menu.Item>
                                <Menu.Item className="opt" key="15">Other Fashion Accessories</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                                <Menu.Item className="opt" key="17">Timepieces, Jewelry, Eyewear</Menu.Item>
                                <Menu.Item className="opt" key="18">Eyewear</Menu.Item>
                                <Menu.Item className="opt" key="19">Eyewear Accessories</Menu.Item>
                                <Menu.Item className="opt" key="20">Jewelry</Menu.Item>
                                <Menu.Item className="opt" key="21">Jewelry Accessories</Menu.Item>
                                <Menu.Item className="opt" key="22">Watch Accessories & Parts</Menu.Item>
                                <Menu.Item className="opt" key="23">Watches</Menu.Item>
                                <Menu.Item className="opt" key="24">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:4" title="Lights & Lighting / Construction & Real Estate">
                                <Menu.Item className="opt" key="1">Lights & Lighting</Menu.Item>
                                <Menu.Item className="opt" key="2">Commercial & Industrial Lighting</Menu.Item>
                                <Menu.Item className="opt" key="3">Healthcare Lighting</Menu.Item>
                                <Menu.Item className="opt" key="4">Holiday Lighting</Menu.Item>
                                <Menu.Item className="opt" key="5">Holiday Lighting（old）</Menu.Item>
                                <Menu.Item className="opt" key="6">Indoor Lighting</Menu.Item>
                                <Menu.Item className="opt" key="7">Landscape Lighting</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Construction & Real Estate</Menu.Item>
                                <Menu.Item className="opt" key="10">Balustrades & Handrails</Menu.Item>
                                <Menu.Item className="opt" key="11">Bathroom & Kitchen</Menu.Item>
                                <Menu.Item className="opt" key="12">Building & Industrial Glass</Menu.Item>
                                <Menu.Item className="opt" key="13">Building Boards</Menu.Item>
                                <Menu.Item className="opt" key="14">Building Glass（old）</Menu.Item>
                                <Menu.Item className="opt" key="15">Ceilings</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:5" title="Home & Garden / Furniture">
                                <Menu.Item className="opt" key="1">Home & Garden</Menu.Item>
                                <Menu.Item className="opt" key="2">Kitchen & Tabletop</Menu.Item>
                                <Menu.Item className="opt" key="3">Garden Supplies</Menu.Item>
                                <Menu.Item className="opt" key="4">Pet Products</Menu.Item>
                                <Menu.Item className="opt" key="5">Home Storage & Organization</Menu.Item>
                                <Menu.Item className="opt" key="6">Household Cleaning Tools & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Household Sundries</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Furniture</Menu.Item>
                                <Menu.Item className="opt" key="10">Commercial Furniture</Menu.Item>
                                <Menu.Item className="opt" key="11">Furniture Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Furniture Accessories （old）</Menu.Item>
                                <Menu.Item className="opt" key="13">Furniture Hardware</Menu.Item>
                                <Menu.Item className="opt" key="14">Furniture Parts</Menu.Item>
                                <Menu.Item className="opt" key="15">Home Furniture</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:6" title="Packaging & Printing / Office & School Supplies">
                                <Menu.Item className="opt" key="1">Home & Garden</Menu.Item>
                                <Menu.Item className="opt" key="2">Kitchen & Tabletop</Menu.Item>
                                <Menu.Item className="opt" key="3">Garden Supplies</Menu.Item>
                                <Menu.Item className="opt" key="4">Pet Products</Menu.Item>
                                <Menu.Item className="opt" key="5">Home Storage & Organization</Menu.Item>
                                <Menu.Item className="opt" key="6">Household Cleaning Tools & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Household Sundries</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Furniture</Menu.Item>
                                <Menu.Item className="opt" key="10">Commercial Furniture</Menu.Item>
                                <Menu.Item className="opt" key="11">Furniture Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Furniture Accessories （old）</Menu.Item>
                                <Menu.Item className="opt" key="13">Furniture Hardware</Menu.Item>
                                <Menu.Item className="opt" key="14">Furniture Parts</Menu.Item>
                                <Menu.Item className="opt" key="15">Home Furniture</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:7" title="Electrical Equipment & Supplies">
                                <Menu.Item className="opt" key="1">Home & Garden</Menu.Item>
                                <Menu.Item className="opt" key="2">Kitchen & Tabletop</Menu.Item>
                                <Menu.Item className="opt" key="3">Garden Supplies</Menu.Item>
                                <Menu.Item className="opt" key="4">Pet Products</Menu.Item>
                                <Menu.Item className="opt" key="5">Home Storage & Organization</Menu.Item>
                                <Menu.Item className="opt" key="6">Household Cleaning Tools & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Household Sundries</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Furniture</Menu.Item>
                                <Menu.Item className="opt" key="10">Commercial Furniture</Menu.Item>
                                <Menu.Item className="opt" key="11">Furniture Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Furniture Accessories （old）</Menu.Item>
                                <Menu.Item className="opt" key="13">Furniture Hardware</Menu.Item>
                                <Menu.Item className="opt" key="14">Furniture Parts</Menu.Item>
                                <Menu.Item className="opt" key="15">Home Furniture</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:8" title="Tools & Hardware / Security & Protection / Fabrication Service">
                                <Menu.Item className="opt" key="1">Home & Garden</Menu.Item>
                                <Menu.Item className="opt" key="2">Kitchen & Tabletop</Menu.Item>
                                <Menu.Item className="opt" key="3">Garden Supplies</Menu.Item>
                                <Menu.Item className="opt" key="4">Pet Products</Menu.Item>
                                <Menu.Item className="opt" key="5">Home Storage & Organization</Menu.Item>
                                <Menu.Item className="opt" key="6">Household Cleaning Tools & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Household Sundries</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Furniture</Menu.Item>
                                <Menu.Item className="opt" key="10">Commercial Furniture</Menu.Item>
                                <Menu.Item className="opt" key="11">Furniture Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Furniture Accessories （old）</Menu.Item>
                                <Menu.Item className="opt" key="13">Furniture Hardware</Menu.Item>
                                <Menu.Item className="opt" key="14">Furniture Parts</Menu.Item>
                                <Menu.Item className="opt" key="15">Home Furniture</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:9" title="Electrical Equipment & Supplies / Electronic Components,Accessories & Telecommunications">
                                <Menu.Item className="opt" key="1">Home & Garden</Menu.Item>
                                <Menu.Item className="opt" key="2">Kitchen & Tabletop</Menu.Item>
                                <Menu.Item className="opt" key="3">Garden Supplies</Menu.Item>
                                <Menu.Item className="opt" key="4">Pet Products</Menu.Item>
                                <Menu.Item className="opt" key="5">Home Storage & Organization</Menu.Item>
                                <Menu.Item className="opt" key="6">Household Cleaning Tools & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Household Sundries</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Furniture</Menu.Item>
                                <Menu.Item className="opt" key="10">Commercial Furniture</Menu.Item>
                                <Menu.Item className="opt" key="11">Furniture Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Furniture Accessories （old）</Menu.Item>
                                <Menu.Item className="opt" key="13">Furniture Hardware</Menu.Item>
                                <Menu.Item className="opt" key="14">Furniture Parts</Menu.Item>
                                <Menu.Item className="opt" key="15">Home Furniture</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                            <SubMenu className="select" key="setting:10" title="Electrical Equipment & Supplies / Electronic Components,Accessories & Telecommunications">
                                <Menu.Item className="opt" key="1">Home & Garden</Menu.Item>
                                <Menu.Item className="opt" key="2">Kitchen & Tabletop</Menu.Item>
                                <Menu.Item className="opt" key="3">Garden Supplies</Menu.Item>
                                <Menu.Item className="opt" key="4">Pet Products</Menu.Item>
                                <Menu.Item className="opt" key="5">Home Storage & Organization</Menu.Item>
                                <Menu.Item className="opt" key="6">Household Cleaning Tools & Accessories</Menu.Item>
                                <Menu.Item className="opt" key="7">Household Sundries</Menu.Item>
                                <Menu.Item className="opt" key="8">View More</Menu.Item>
                                <Menu.Item className="opt" key="9">Furniture</Menu.Item>
                                <Menu.Item className="opt" key="10">Commercial Furniture</Menu.Item>
                                <Menu.Item className="opt" key="11">Furniture Accessories</Menu.Item>
                                <Menu.Item className="opt" key="12">Furniture Accessories （old）</Menu.Item>
                                <Menu.Item className="opt" key="13">Furniture Hardware</Menu.Item>
                                <Menu.Item className="opt" key="14">Furniture Parts</Menu.Item>
                                <Menu.Item className="opt" key="15">Home Furniture</Menu.Item>
                                <Menu.Item className="opt" key="16">View More</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                    <span className="trade1">Trade Shows</span>
                    <span className="trade1">Personal Protective Equipment</span>
                    <span className="trade1">Trade Shows</span>

                        <Menu onClick={handleClick} mode="horizontal">
                            <SubMenu key="sub1" title="Buyer Central">
                                <Menu.Item className="opt" key="1">Blog</Menu.Item>
                                <Menu.Item className="opt" key="2">Trade Assurance</Menu.Item>
                                <Menu.Item className="opt" key="3">Production Monitoring & Inspection Services</Menu.Item>
                                <Menu.Item className="opt" key="4">Logistics Service</Menu.Item>
                                <Menu.Item className="opt" key="4">Letter of Credit</Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Menu onClick={handleClick} mode="horizontal">
                            <SubMenu key="sub1" title="Sell on Alibaba">
                                <Menu.Item className="opt" key="1">For Global Seller</Menu.Item>
                                <Menu.Item className="opt" key="2">For Chinese Seller</Menu.Item>
                                <Menu.Item className="opt" key="3">Partner Program</Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Menu onClick={handleClick} mode="horizontal">
                            <SubMenu key="sub1"  title="Help">
                                <Menu.Item className="opt" key="1">For Buyers</Menu.Item>
                                <Menu.Item className="opt" key="2">For Suppliers</Menu.Item>
                                <Menu.Item className="opt" key="3">Submit a Dispute</Menu.Item>
                                <Menu.Item className="opt" key="4">Report IPR Infringement</Menu.Item>
                                <Menu.Item className="opt" key="4">Report Abuse</Menu.Item>
                            </SubMenu>
                        </Menu>
                </div>
            </div>
        </>
    )

}
export default Navbar2