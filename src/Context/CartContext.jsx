import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export let Shanta = createContext();

export default function CartContext(props) {
    const [cart, setCart] = useState([]); // ✅ Global cart state
    const [count, setCount] = useState(0);

    function productCart(product) {
        setCart((prevCart) => [...prevCart, product]); // ✅ Add product
        setCount((prevCount) => prevCount + 1); // ✅ Update count

        Swal.fire({
            title: "Product Added To Cart",
            text: `${product.title} has been added!`,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#3B82F6",
        });
    }

    function removeFromCart(productId) {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((product) => product.id !== productId);
            setCount(updatedCart.length); // ✅ Update cart count
            return updatedCart; // ✅ Correctly update state
        });
    }

    return (
        <Shanta.Provider value={{ cart, setCart, count, setCount, productCart, removeFromCart }}>
            {props.children}
        </Shanta.Provider>
    );
}
