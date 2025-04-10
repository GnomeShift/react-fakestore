import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Такой страницы не существует</h1>
            <Link to="/products" style={{ fontSize: '1.2em' }}>К списку товаров</Link>
        </div>
    )
}

export default NotFound;
