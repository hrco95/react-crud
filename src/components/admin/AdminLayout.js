import React, { Component } from "react";
import AdminSider from "./AdminSider";
import AdminContent from "./AdminContent";

//Ant
import { Layout } from "antd";
import "antd/dist/antd.css";

//Style
const layoutStyle = {
  minHeight: "100vh"
};

class AdminPanel extends Component {
  render() {
    return (
      <Layout style={layoutStyle}>
        <AdminSider />
        <AdminContent />
      </Layout>
    );
  }
}

export default AdminPanel;
