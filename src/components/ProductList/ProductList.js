import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            }
            catch (error) {
                console.error('Ошибка загрузки товаров: ', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;
