import React from "react";
import "./Nav.css";
import "./NavbarTop"

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h2 className="navbar-brand">Administration View</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse right" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li
                    onClick={() => props.handlePageChange("AdminHome")}
                    className={props.currentPage === "AdminHome" ? "active" : ""}>
                    <a className="nav-link">Administration Homes
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Designs
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item">Completed Projects</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">Current Projects</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">Future Projects</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Patterns
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown dLabel">
                        <li 
                        onClick={() => props.handlePageChange("PatternInStock")}
                        className={props.currentPage === "PatternsInStock" ? "active" : ""}>
                            <a>In-Stock Patterns</a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">Damaged & Wishlist Patterns</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Fabrics
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item">In-Stock Fabrics</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item">Fabrics 1/2 yard and under</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Main Portfolio Page</a>
                </li>

            </ul>
        </div>
    </nav>
);


export default Nav;