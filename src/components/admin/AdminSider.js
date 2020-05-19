import React from "react";

//Router
import { Link } from "react-router-dom";

//Ant
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import {
  UserOutlined,
  PlusCircleOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminSider = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu
          key="player"
          title={
            <span>
              <UserOutlined />
              <span>Igrač</span>
            </span>
          }
        >
          <Menu.Item key="new_player">
            <PlusCircleOutlined />
            <span>Novi igrač</span>
            <Link to="/adminpanel/createplayer" />
          </Menu.Item>
          <Menu.Item key="edit_player">
            <EditOutlined />
            <span>Uredi igrača</span>
            <Link to="/adminpanel/teamlist" />
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="news"
          title={
            <span>
              <FileTextOutlined />
              <span>Vijest</span>
            </span>
          }
        >
          <Menu.Item key="new_news">
            <PlusCircleOutlined />
            <span>Nova vijest</span>
            <Link to="/adminpanel/createnews" />
          </Menu.Item>
          <Menu.Item key="edit_news">
            <EditOutlined />
            <span>Uredi vijest</span>
            <Link to="/adminpanel/newslist" />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AdminSider;
