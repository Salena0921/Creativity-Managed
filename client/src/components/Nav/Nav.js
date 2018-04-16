import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <h2 className="navbar-brand col col-lg-4" id="titlenav">Midnight Fairy Realm Designs</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col col-lg-" id="navbarmenu">
            <div className="collapse navbar-collapse right container" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto row">
                    <li className={window.location.pathname === "/" ? "active" : "col col-lg-2"} id="homenav">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown col col-lg-2">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Designs
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <ul>
                                <li className={window.location.pathname === "/current-projects" ? "active" : ""}>
                                    <Link to="/current-projects">Current Projects</Link>
                                </li>
                                <li className={window.location.pathname === "/completed&future" ? "active" : ""}>
                                    <Link to="/completedfuture">Completed and Future Projects</Link>
                                </li>
                                <li className={window.location.pathname === "/projectplan" ? "active" : ""}>
                                    <Link to="/projectplan">Project Plan</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown col col-lg-2">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Patterns
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <ul>
                                <li className={window.location.pathname === "/patterns-in-stock" ? "active" : ""}>
                                    <Link to="/patterns-in-stock">Patterns In Stock</Link>
                                </li>
                                <li className={window.location.pathname === "/damaged&wishlist-patterns" ? "active" : ""}>
                                    <Link to="/damagedwishlist-patterns">Damaged & Wishlist Patterns</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown col col-lg-2">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Fabrics
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <ul>
                                <li className={window.location.pathname === "/fabrics-in-stock" ? "active" : ""}>
                                    <Link to="/fabrics-in-stock">Fabrics In Stock</Link>
                                </li>
                                <li className={window.location.pathname === "/fabricshalfyard&under" ? "active" : ""}>
                                    <Link to="/fabricshalfyardunder">Fabrics 1/2 yard and under</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item col col-lg-2">
                        <a className="nav-link" id="portfolionav">Main Portfolio Page</a>
                    </li>
                </ul>
                <button className="col col-lg-2" onClick={props.handleLogout} id="signoutnav"> SIGN OUT</button>
            </div>
        </div>
    </nav>

);


export default Nav;