import React from 'react';

const Rating = ({ rating }) => {
    const roundRating = Math.round(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= roundRating) {
            stars.push(<span key={i} style={{ color: 'orange', fontSize: '1.5em' }}>★</span>);
        }
        else {
            stars.push(<span key={i} style={{ color: 'black', fontSize: '1.5em' }}>★</span>);
        }
    }

    return <div>{stars}</div>;
}

export default Rating;
