import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";


const NavMenu = props => (
    <div className="nav-menu">
        <h1>Admin Menu</h1>
        <ul className="nav flex-column">
            <li className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
            </li>
            <div className="dropdown-divider"></div>
            <h2>Designs</h2>
            <li className={window.location.pathname === "/current-projects" ? "active" : ""}>
                <Link to="/current-projects">Current Projects</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li className={window.location.pathname === "/completed&future" ? "active" : ""}>
                <Link to="/completedfuture">Completed and Future Projects</Link>
            </li>
            <div className="dropdown-divider"></div>
            <h2>Patterns</h2>
            <li className={window.location.pathname === "/patterns-in-stock" ? "active" : ""}>
                <Link to="/patterns-in-stock">Patterns In Stock</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li className={window.location.pathname === "/damaged&wishlist-patterns" ? "active" : ""}>
                <Link to="/damagedwishlist-patterns">Damaged & Wishlist Patterns</Link>
            </li>
            <div className="dropdown-divider"></div>
            <h2>Fabrics</h2>
            <li className={window.location.pathname === "/fabrics-in-stock" ? "active" : ""}>
                <Link to="/fabrics-in-stock">Fabrics In Stock</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li className={window.location.pathname === "/fabricshalfyard&under" ? "active" : ""}>
                <Link to="/fabricshalfyardunder">Fabrics 1/2 yard and under</Link>
            </li>
            <div className="dropdown-divider"></div>
            <li>
                <a>Main Portfolio Page</a>
            </li>
        </ul>
    </div>
   
);

export default NavMenu;