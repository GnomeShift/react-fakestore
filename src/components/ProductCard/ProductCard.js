import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductCard = ({ product }) => {
    return (
        <div style={{ border: '2px solid black', textAlign: 'center', padding: '5px' }}>
            <Link to={`/product/${product.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                <h3>{product.title}</h3>
            </Link>
            <Rating rating={product.rating.rate} />
        </div>
    )
}

export default ProductCard;
