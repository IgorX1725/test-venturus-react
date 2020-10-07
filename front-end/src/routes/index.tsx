import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Createteam from "../pages/Createteam";
import Editteam from '../pages/Editteam'


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/create" component={Createteam} />
    <Route path="/edit/:id" component={Editteam} />
  </Switch>
);

export default Routes;
