import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import './App.css'
import Layout from './components/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error/Error';
import Jewelery from './components/Jewelery/Jewelery'
import Cart from './components/Cart/Cart';
import Electronic from './components/Electronic/Electronic'
import Clothig from './components/Clothes/MenClothis'
import Men from './components/Clothes/MenClothis'
import Women from './components/Clothes/WemanClothis'
import CartContext from './Context/CartContext';
import About from './components/About/About'
import Contact from './components/ContactUs/ContactUs';
export default function App() {

  let Router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
      { path: '/home', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/jewelery', element: <Jewelery /> },
      { path: '/electronics', element: <Electronic /> },
      { path: '/cart', element: <Cart /> },
      { path: '/about', element: <About /> },
      { path: '/clothing/men', element: <Men /> },
      { path: '/clothing/women', element: <Women /> },
      { path: '/clothing', element: <Clothig /> },
      { path: '/details/:id', element: <Details /> },
      { path: '*', element: <Error /> },
      
    ]
  }])

  return <CartContext>
    <RouterProvider router={Router} />
  </CartContext>


}
