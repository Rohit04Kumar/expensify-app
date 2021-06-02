import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => (
    <div className="header">
        <div className="brand">
           <Link className="brand-logo" to="/">Expensify</Link>
        </div>
        <div className="nav">
            <NavLink className="nav-link" activeClassName="is-active" to="/" exact={true}> DashBoard </NavLink>
            <NavLink className="nav-link" activeClassName="is-active" to="/create">Create Expensify </NavLink>
            <NavLink className="nav-link" activeClassName="is-active" to="/help"> Help </NavLink>
        </div>   
    </div>
);

export default Header;