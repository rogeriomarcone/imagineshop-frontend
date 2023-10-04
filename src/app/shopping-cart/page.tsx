'use client';
import { ShoppingCartContext } from "../contexts/ShoppingCart";
import { useContext, useEffect } from 'react';

const ShoppingCart = () => {
    const { getProducts } = useContext(ShoppingCartContext);

    useEffect(() => {
        const products = getProducts();
    }, []);

    return <p>Sopping Cart work</p>
}

export default ShoppingCart;