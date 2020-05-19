import React from "react";

//Check auth component
import AdminRoute from "../auth/AdminRoute";

//Content components
import CreatePlayer from "./player/CreatePlayer";
import EditPlayer from "./player/EditPlayer";
import TeamList from "./player/TeamList";
import CreateNews from "./news/CreateNews";
import NewsList from "./news/NewsList";
import EditNews from "./news/EditNews";

//Ant design
import { Layout } from "antd";
const { Content } = Layout;

//Style
const contentStyle = {
  padding: 20,
  background: "#fff",
};

const AdminContent = () => {
  return (
    <Content style={contentStyle}>
      <AdminRoute path="/adminpanel/createnews" exact component={CreateNews} />
      <AdminRoute path="/adminpanel/newslist" exact component={NewsList} />
      <AdminRoute path="/adminpanel/teamlist" exact component={TeamList} />
      <AdminRoute path="/adminpanel/editnews/:id" exact component={EditNews} />
      <AdminRoute
        path="/adminpanel/editplayer/:id"
        exact
        component={EditPlayer}
      />
      <AdminRoute
        path="/adminpanel/createplayer"
        exact
        component={CreatePlayer}
      />
    </Content>
  );
};

export default AdminContent;
