import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Shanta } from '../../Context/CartContext';
import Helmet from'react-helmet';

export default function Details() {
    const { productCart } = useContext(Shanta);
    const [product, setProduct] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();

    async function productInfo() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }

    useEffect(() => {
        productInfo();
    }, [id]);

    function handleAddToCart() {
        productCart(product); // Pass product to context function
        navigate('/cart'); // Navigate to cart after adding
    }

    return (
        <div className="container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="row m-5">
                <div className="col-lg-7 col-sm-12">
                    <p className='fs-5'>Category: <span className='fs-6'>{product.category}</span></p>
                    <img src={product.image} alt={product.title} className='w-50' />
                    <div className="box d-flex justify-content-between align-items-center mt-4">
                        <div className="btn btn-primary " onClick={handleAddToCart}>Add To Cart</div>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 mt-5 m-auto">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <div className="box d-flex justify-content-between">
                        <p>Rating: {product.rating?.rate}</p>
                        <p>Count: {product.rating?.count}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
