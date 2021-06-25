import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Cart from "./core/Cart";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import About from "./core/About";
import checkout from "./core/checkout";




const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/cart" component={Cart} />
          <Route path="/About" component={About} />
          <Route path="/checkout" component={checkout} />
          <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;