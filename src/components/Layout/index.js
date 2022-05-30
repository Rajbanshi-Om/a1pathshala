import React, { Fragment, useState } from "react";
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Drawer, Button, Space, Select } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { sideBarData } from "./sideBarData";
import "./style.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const PageLayout = ({ children }) => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const pathnames = pathname.split("/").filter((x) => x);
  const { Header, Sider, Content } = Layout;
  const [current, setCurrent] = useState("");
  const items2 = sideBarData.map((item, index) => {
    const key = String(index + 1);
    return {
      key: item.subMenu ? key : item.name.toLowerCase() === 'dashboard' ? `/` :`/${item.name.toLowerCase().replace(/ /g, "")}`   ,
      icon: React.createElement(item.icon),
      label: `${item.name}`,
      children: item?.subMenu?.map((subItem, j) => {
        return {
          key: `/${item.name.toLowerCase().replace(/ /g, "")}/${subItem.toLowerCase().replace(/ /g, "")}`,
          label: subItem,
        };
      }),
    };
  });

  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleMenu = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  const handleMenu2 = (e) => {
    navigate(e.key);
    setCurrent(e.key);
    setCollapsed(!collapsed);

  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/signin", { replace: true });
  };
  const menu = (
    <Menu style={{width:'200px'}}  items={[
      {
        label: (
          <Link to='/profile'>
          <div> Profile</div>
          </Link>
        ),
        icon:React.createElement(ProfileOutlined)
      },
      {
        label: (
          <div onClick={handleLogout}>Logout</div>
        ),
        icon:React.createElement(LogoutOutlined )
      },
      
  ]}  />
  )
  const onClose = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Drawer
        className="large__screen "
        size="small"
        placement="left"
        title='A1 Pathshala'
        closable={false}
        onClose={onClose}
        visible={collapsed}
        extra={
            <Button onClick={onClose}>Close</Button>
        }
      >
          <Menu
              style={{paddingBottom:'24px' ,width:'100%'}}
              theme="light"
              mode="inline"
              onClick={(e) => handleMenu2(e)}
              selectedKeys={[current]}
              defaultSelectedKeys={["1"]}
              items={items2}
              ></Menu>
      
      </Drawer>


    <Layout style={{ height: '100vh' }} >

      <Sider className="hidescroll small__screen"  style={{height:'100vh',overflow: 'scroll'}}   width={"250px"} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"> {collapsed ? "A1" : "A1 Pathshala"} </div>
        <Menu
          style={{paddingBottom:'24px'}}
          theme="dark"
          mode="inline"
          onClick={(e) => handleMenu(e)}
          selectedKeys={[current]}
          defaultSelectedKeys={["1"]}
          // defaultOpenKeys={['sub1']}
          //   style={{ height: '100%', borderRight: 0 }}
          items={items2}
        ></Menu>
      </Sider>


      <Layout
        className="site-layout"
        style={{ height: "100vh", overflow: "hidden" }}
      >
          <Header className="site-layout-background headerFlex">
            <Space>

          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
              )}
              <Select placeholder="Select Session" style={{width:'150px'}}>
                <Select.Option value='2019'>2019</Select.Option>
                <Select.Option value='2020'>2020</Select.Option>
              </Select>
            </Space>
          <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
            <Avatar
              // onClick={handleLogout}
              style={{ cursor: "pointer" }}
              icon={<UserOutlined />}
            />
         </Dropdown>
        </Header>
        <Breadcrumb
          style={{
            margin: "8px 0 0 0",
          }}
        >
          {pathnames.map((path, index) => {
            return (
              <Fragment key={index}>
                 <Breadcrumb.Item>{path.toLowerCase().charAt(0).toUpperCase()+(path.slice(1).toLowerCase())}</Breadcrumb.Item>
              </Fragment>
            )
          }  )}
        </Breadcrumb>
        <Content
          className="site-layout-background hidescroll"
          style={{
            overflow: "scroll",
            margin: "-5px 16px 24px 16px ",
            padding: 24,
            minHeight: 301,
            // maxHeight:570
          }}
        >
          {children}
        </Content>
      </Layout>
      </Layout>
      </>
      
  );
};

export default PageLayout;
