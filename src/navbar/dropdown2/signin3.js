import { Menu, Dropdown, Button, Space } from 'antd';
import { Avatar } from 'antd';
import { HomeOutlined, } from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';
function Signin3() {
    const menu = (
        <Menu style={{ width: 100 }} style={{ height: 300 }}>
            <Menu.Item>
                <div className="menu-item-div-paragraph">
                    <p className="menu-item-div-para-link-1">Trade Assurance</p>
                    <p className="menu-item-learn">Learn more</p>
                </div>
            </Menu.Item>
            <Menu.Item>
                <p className="menu-item-div-para-link-1">protects your Alibaba.com orders<br /></p>
            </Menu.Item>
            <Menu.Item>
                <p className="menu-item-div-para-link-1">Trade Assurance ensures</p>
            </Menu.Item>

            <Menu.Item>
                <ul>
                    <li className="menu-item-div-para-link-1">Product quality</li>
                    <li className="menu-item-div-para-link-1">On-time shipment</li>
                </ul>
            </Menu.Item>
            <Menu.Item>
                <div>
                    <button className="menu-item1" >Order with Trade Assurance</button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="logo3">

            <div className="btnlogo">

                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Button>
                                <p className="dropdown-button-para-logo-1">$</p>
                                <div className="span-flex-4">
                                    {/* <br/> */}
                                    <span className="span-flex-3">Orders</span>
                                </div>
                            </Button>
                        </Dropdown>
                    </Space>
                </Space>
            </div>
        </div>
    )
}
export default Signin3