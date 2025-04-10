import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigation = useNavigate();
    const url = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProduct(data);
            }
            catch (error) {
                console.error('Не удалось загрузить товар: ', error);
            }
        }

        fetchProduct();
    }, [id, url]);

    if (!product) {
        return <div style={{ textAlign: 'center' }}>Загрузка, пожалуйста, подождите...</div>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '600px', margin: '0 auto' }}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
            <p>Цена: {product.price}$</p>
            <p>Описание: {product.description}</p>
            <Rating rating={product.rating.rate} />
            <button onClick={() => navigation(-1)}>Назад</button>
        </div>
    )
}

export default ProductDetails;
