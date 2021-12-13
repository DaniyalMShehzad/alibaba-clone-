import { Menu, Dropdown, Button, Space } from 'antd';
import { Avatar } from 'antd';
import { HomeOutlined,} from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';
function Signin2() {
    const menu = (
        <Menu style={{ width: 100 }}  style={{ height: 230 }}>
            <Menu.Item>
                <p>Unread message reminder</p>
            </Menu.Item>
            <Menu.Item>
            <p>We will remind you here when there is <br/> new message. Please log in to view.</p>
            </Menu.Item>
            <Menu.Item>
                <button className="menu-item1" >
                    Sign in
                </button>
            </Menu.Item>
            <Menu.Item>
                <div>
                    <span className="menu-span-div-span-1">New user? Please register and start your <br/> business!</span>
                </div>
            </Menu.Item>
           </Menu>
    );

    return (
        <div className="logo-2">

            <div className="btnlogo">

                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Button>
                                <Avatar shape="square" size="small" icon={<MessageFilled/>}/>         
                                <div className="span-flex-1">
                                    {/* <br/> */}
                                    <span className="span-text-1">Messages</span>
                                </div>
                            </Button>
                        </Dropdown>
                    </Space>
                </Space>
            </div>
        </div>
    )
}
export default Signin2