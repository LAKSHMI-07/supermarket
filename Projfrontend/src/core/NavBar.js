import React, {Fragment} from "react";
import { NavLink, withRouter } from "react-router-dom";

import { signout, isAuthenticated} from "../auth/helper"

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2ecc72" };
    } else {
        return { color: "#2ecc80" };
    }
};

const NavBar = ({ history, path}) => {
    return (
        <div>
            <div className="container">
            <div className="head-t">
            <ul className="card1">
            <li></li>
                <li>
                    <NavLink
                      style={currentTab(history, "/")}
                      className="nav-link" to ="/">
                       <i className="fa fa-home"  aria-hidden="true" />
                      HOME
                    </NavLink>    
                </li>
               
               {isAuthenticated() && (
                    <li>
                    <NavLink
                      style={currentTab(history, "/user/dashboard")}
                      className="nav-link" 
                      to ="/user/dashboard">
                      <i className="fa fa-user" aria-hidden="true" />
                      DASHBOARD</NavLink>
                </li>
               )}
               
               {!isAuthenticated() && (
                   <Fragment>
                        <li>
                    <NavLink
                      style={currentTab(history, "/signup")}
                      className="nav-link" 
                      to ="/signup">
                        <i className="fa fa-arrow-right" aria-hidden="true" />
                      REGISTER
                      </NavLink>
                </li>
                <li>
                    <NavLink
                      style={currentTab(history, "/signin")}
                      className="nav-link" 
                      to ="/signin">
                        <i className="fa fa-user" aria-hidden="true" />
                      LOGIN
                      </NavLink>
                </li>
                   </Fragment>
               )}
                {isAuthenticated() && (
                     <Fragment>
                     <li>
                    
                     <NavLink 
                       style={currentTab(history, "/cart")}
                       className="nav-link" 
                       to ="/cart">
                       <i className="fa fa-shopping-cart" aria-hidden="true" />                       CART
                     </NavLink>
                 </li>

        
                    <li>
                    <span
                     style={currentTab(history, "/signout")}
                    className="nav-link" 
                    onClick={() => {
                        signout(() => {
                            history.push("/");
                        });
                    }}>
                        <i class="fas fa-sign-out-alt" aria-hidden="true" />
                        LOGOUT
                    </span>
                </li>
                </Fragment>
                )}
            </ul>
        </div>
        </div>
        </div>
    )
};

export default withRouter(NavBar);