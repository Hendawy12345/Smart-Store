import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { Helmet } from 'react-helmet';
export default function Category() {
    const [jewelery, setJewelery] = useState([]);

    async function fetchCategory() {
        try {
            let { data } = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`); // ✅ Fixed URL
            setJewelery(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <>
            <div className="container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Man Clothes</title>

                </Helmet>
                <h2 className="text-center my-4">Jewelry Collection</h2>
                <div className="row">
                    {jewelery.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 p-2" key={item.id}>
                            <div className="card h-100 d-flex flex-column">
                                <Link to={`/details/${item.id}`}>
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.title}
                                        style={{
                                            height: "250px",
                                            objectFit: "contain",
                                            padding: "10px",
                                            backgroundColor: "#f8f9fa",
                                        }}
                                    />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text flex-grow-1">
                                        {item.description.split(" ").length > 30
                                            ? item.description.split(" ").slice(0, 30).join(" ") + "..."
                                            : item.description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Price: ${item.price}</strong>
                                    </p>
                                    <Link to={`/details/${item.id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
