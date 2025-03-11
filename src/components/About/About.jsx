import React from "react";
import { Helmet } from "react-helmet";
export default function About() {
    return (
        <div className="container p-5">
            
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                
            
            <h2 className="text-center mb-4">🛍️ About Smart Store</h2>

            <div className="card p-4 shadow-lg">
                <h4>Welcome to Smart Store!</h4>
                <p className="text-muted">
                    Smart Store is an online shopping platform that offers a wide range of **electronics, jewelry, and clothing**. Our goal is to provide **high-quality products** at the best prices.
                </p>

                <h5>📦 What We Offer:</h5>
                <ul>
                    <li>⚡ Trending **electronics**</li>
                    <li>💎 Elegant **jewelry**</li>
                    <li>👗 Stylish **clothing** for men & women</li>
                </ul>

                <h5>🔗 Powered by FakeStoreAPI</h5>
                <p className="text-muted">
                    Our store uses **FakeStoreAPI**, a free and open-source API that provides **realistic product data** for developers and e-commerce projects.
                </p>
                <p>
                    Check out the API:{" "}
                    <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">
                        FakeStoreAPI Docs
                    </a>
                </p>

                <h5>🚀 Start Shopping Now!</h5>
                <p>
                    Explore our amazing products and add your favorites to the cart. Happy shopping! 🛒
                </p>
            </div>

            {/* Styles */}
            <style>{`
        .card {
          border-radius: 15px;
          background: #f8f9fa;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        ul li {
          margin-bottom: 5px;
        }
      `}</style>
        </div>
    );
}
