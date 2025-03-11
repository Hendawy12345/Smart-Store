import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light pt-4 pb-2">
                <div className="container">
                    <div className="row">

                        {/* Company Info */}
                        <div className="col-md-4">
                            <h5>🛍️ Smart Store</h5>
                            <p>Bringing you the best products at unbeatable prices.</p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/home" className="text-light text-decoration-none">Home</Link></li>
                                <li><Link to="/home" className="text-light text-decoration-none">Categories</Link></li>
                                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                                <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-light"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mt-4">
                        <p className="mb-0">© 2025 Smart Store. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Bootstrap Styling for Small Screens */}
            <style>{`
        @media (max-width: 768px) {
          .text-center p {
            font-size: 14px;
          }
          .col-md-4 {
            text-align: center;
            margin-bottom: 20px;
          }
        }
      `}</style>
        </>
    );
}
