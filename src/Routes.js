import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import News from "./components/news/News";
import NewsDetails from "./components/news/NewsDetails";
import Team from "./components/player/Team";
import PlayerDetails from "./components/player/PlayerDetails";
import SignIn from "./components/auth/SignIn";
import AdminLayout from "./components/admin/AdminLayout";
import AdminRoute from "./components/auth/AdminRoute";

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/news/:id" component={NewsDetails} />
          <Route path="/player/:id" component={PlayerDetails} />
          <Route path="/team" component={Team} />
          <Route path="/signin" component={SignIn} />

          <AdminRoute path="/adminpanel" component={AdminLayout} />
          <Route component={NoMatchPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
