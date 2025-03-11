import axios from 'axios';
import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners'; // ✅ Import Loader
import { Helmet } from 'react-helmet';
export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            let { data } = await axios.get("https://fakestoreapi.com/products");
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>

            </Helmet>
            <h1 className="text-center p-5">Welcome to my Smart Store!</h1>

            {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <RingLoader color="#007bff" size={80} />
                </div>
            ) : (
                <div className="container z-index-1">
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-lg-3 col-md-6 col-sm-12 p-2" key={product.id}>
                                <div className="card h-100 d-flex flex-column">
                                    <Link to={`/details/${product.id}`}>
                                        <img
                                            src={product.image}
                                            className="card-img-top"
                                            alt={product.title}
                                            style={{
                                                height: "250px",
                                                objectFit: "contain",
                                                padding: "10px",
                                                backgroundColor: "#f8f9fa",
                                            }}
                                        />
                                    </Link>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text flex-grow-1">
                                            {product.description.split(" ").length > 30
                                                ? product.description.split(" ").slice(0, 30).join(" ") + "..."
                                                : product.description}
                                        </p>
                                        <p className="card-text">
                                            <strong>Price: ${product.price}</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
