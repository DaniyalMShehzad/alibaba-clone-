import { Menu, Dropdown, Button, Space } from 'antd';
import { Avatar } from 'antd';
import { HomeOutlined, } from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';
function Signin4() {
    const menu = (
        <Menu>
            <Menu.Item>
                <div className="menu-item-div-p-login">
                    <p className="menu-item-div-p-login-p-1">you havent login.</p>
                    <p className="menu-item-div-p-login-p-2">please login.</p>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="logo-1">

            <div className="btnlogo">

                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Button>
                                <i className="fas fa-shopping-cart"></i>
                                <div className="span-flex-1">
                                    {/* <br/> */}
                                    <span className="span-text-1">Cart</span>
                                </div>
                            </Button>
                        </Dropdown>
                    </Space>
                </Space>
            </div>
        </div>
    )
}
export default Signin4