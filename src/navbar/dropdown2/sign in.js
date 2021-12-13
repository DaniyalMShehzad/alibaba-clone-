import { Menu, Dropdown, Button, Space } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function Signin() {
    const menu = (
        <Menu style={{ width: 100 }}  style={{ height: 580 }}>
            <Menu.Item>
                <p>Welcome Back!</p>
            </Menu.Item>
            <Menu.Item>
                <button className="menu-item1" >
                    Sign in
                </button>
            </Menu.Item>
            <Menu.Item>
                <button className="menu-item2" >
                    Join Free
                </button>
            </Menu.Item>
            <Menu.Item>
                <div>
                    <span className="menu-span1"></span>
                    <span className="menu-span-h1">Continue with</span>
                    <span className="menu-span1"></span>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="menu-para-div-1">
                <span className="menu-span-para1">By sliding to Continue with or Create My Account , I agree to</span>
                <p>
                <span className="menu-span-para2">Alibaba.com Free Membership Agreement  </span>
                and
                
               <span className="menu-span-para2">Receive  <br/> Marketing Materials</span>
                </p>
                </div>
            </Menu.Item>
            <div className="menu-para">
                <span className="menu-span-line"></span>
            <Menu.Item>
                <p className="para-p-1">My Alibaba</p>
            </Menu.Item>
            <Menu.Item>
                <p className="para-p-2"> Manage RFQ</p>
            </Menu.Item>
            <Menu.Item>
                <p className="para-p-2"> Orders</p>
            </Menu.Item>
            <Menu.Item>
                <p className="para-p-2"> Favorites</p>
            </Menu.Item>
            <Menu.Item>
                <p className="para-p-2"> Account</p>  
            </Menu.Item>
            <span className="menu-span-line"></span>
            <Menu.Item>
                <p className="para-p-2"> Submit RFQ</p>
            </Menu.Item>
            </div>
        </Menu>
    );

    return (
        <div className="logo-1">

            <div className="btnlogo">

                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Button>
                                {/* <Avatar shape="square" size="small" icon={<UserOutlined />}/>          */}
                                <div className="span-flex-1">
                                    <span className="span-text-1">Sign in</span>
                                    <br />
                                    <span className="span-text-2">join free</span>
                                </div>
                            </Button>
                        </Dropdown>
                    </Space>
                </Space>
            </div>
        </div>
    )
}
export default Signin