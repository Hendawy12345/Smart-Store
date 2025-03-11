import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Shanta } from '../../Context/CartContext';

export default function Navbar() {
    const { count } = useContext(Shanta); 
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isClothingOpen, setClothingOpen] = useState(false);


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <h2 className="navbar-brand fs-3">Hendawy Store</h2>
                    

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link active" to="/home">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

                            {/* Categories Dropdown */}
                            <li className="nav-item dropdown"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <a className="nav-link dropdown-toggle" href="#">Categories</a>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu show">
                                        <li><Link className="dropdown-item" to="/electronics">Electronics</Link></li>
                                        <li><Link className="dropdown-item" to="/jewelery">Jewelry</Link></li>
                                        <li className="dropdown-item dropdown"
                                            onMouseEnter={() => setClothingOpen(true)}
                                            onMouseLeave={() => setClothingOpen(false)}
                                        >
                                            <a className="dropdown-toggle text-black text-decoration-none" href="#">Clothing</a>
                                            {isClothingOpen && (
                                                <ul className="dropdown-menu show">
                                                    <li><Link className="dropdown-item" to="/clothing/men">Men's Clothing</Link></li>
                                                    <li><Link className="dropdown-item" to="/clothing/women">Women's Clothing</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            
                        </ul>

                        {/* Search Bar */}
                        {/* <form className="d-flex mt-3 mt-lg-0">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}

                        {/* Cart Icon */}
                        <Link to="/cart" className="btn btn-light ms-3 position-relative">
                            <FaShoppingCart size={24} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {count}
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
