import { createContext } from 'react';
import { Product } from '../interfaces/product';

interface ShoppingCart {
    addProduct: (product: Product) => void;
    getProducts: () => Product[];
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

const ShoppingCartProvider = ({ children }: any) => {
    const isBrowser = typeof window !== 'undefined';
    const SESSION_STORAGE = 'products';

    const addProduct = (product: Product) => {
        const products = getProducts();
        products.push(product);
        if (isBrowser) {
            sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
        }
    }

    const getProducts = (): Product[] => {
        if (isBrowser) {
            const products = sessionStorage.getItem(SESSION_STORAGE);
            return products ? JSON.parse(products) : [];
        }
        return [];
    }

    return (
        <ShoppingCartContext.Provider value={{ addProduct, getProducts }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};

export default ShoppingCartProvider;