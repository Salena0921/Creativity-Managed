import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";


const NavMenu = props => (
    <div className="nav-menu">
        <h2>MAIN MENU</h2>
        <ul className="nav flex-column">
            <li className={window.location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
            </li>
            <div id="designs">
                <h3>DESIGNS</h3>
                <li className={window.location.pathname === "/current-projects" ? "active" : ""}>
                    <Link to="/current-projects">Current Projects</Link>
                </li>
                <div className="dropdown-divider"></div>
                <li className={window.location.pathname === "/completed&future" ? "active" : ""}>
                    <Link to="/completedfuture">Completed and Future Projects</Link>
                </li>                
            </div>
            <div id="patterns">
                <h3>PATTERNS</h3>
                <li className={window.location.pathname === "/patterns-in-stock" ? "active" : ""}>
                    <Link to="/patterns-in-stock">Patterns In Stock</Link>
                </li>
                <div className="dropdown-divider"></div>
                <li className={window.location.pathname === "/damaged&wishlist-patterns" ? "active" : ""}>
                    <Link to="/damagedwishlist-patterns">Damaged & Wishlist Patterns</Link>
                </li>
            </div>
            <div id="fabrics">
                <h3>FABRICS</h3>
                <li className={window.location.pathname === "/fabrics-in-stock" ? "active" : ""}>
                    <Link to="/fabrics-in-stock">Fabrics In Stock</Link>
                </li>
                <div className="dropdown-divider"></div>
                <li className={window.location.pathname === "/fabricshalfyard&under" ? "active" : ""}>
                    <Link to="/fabricshalfyardunder">Fabrics 1/2 yard and under</Link>
                </li>
            </div>

            <div id="mainportfolio">
                <li>
                    <a>Main Portfolio Page</a>
                </li>
            </div>
        </ul>
        <button onClick={props.handleLogout} > SIGN OUT </button>
    </div>

);

export default NavMenu;