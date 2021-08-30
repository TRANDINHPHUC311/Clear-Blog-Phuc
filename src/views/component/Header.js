import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <Link to="/">
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" >Home</a></li>
                            </Link>
                            <Link to="/about">
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/#">About</a></li>
                            </Link>
                            <Link to="/post">
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/#">Sample Post</a></li>
                            </Link>
                            <Link to="/contact">
                                <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="/#">Contact</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
