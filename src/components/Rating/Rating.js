import React, {useEffect, useState} from 'react';

const Rating = ({ rating, onChange }) => {
    const [currentRating, setRating] = useState(Math.round(rating));
    const [hoverStars, setHoverStars] = useState(0);

    useEffect(() => {
        setRating(Math.round(rating));
    }, [rating]);

    const click = (newRating) => {
        setRating(newRating);
        if (onChange) {
            onChange(newRating);
        }
    }

    const hoverStar = (newHoverRating) => {
        setHoverStars(newHoverRating);
    }

    const hoverStarMouseOut = () => {
        setHoverStars(0);
    }

    const getStarColor = (index) => {
        if (hoverStars >= index) {
            return 'gold';
        }
        else if (currentRating >= index) {
            return 'orange';
        }
        else {
            return 'black';
        }
    }

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i}
                style={{ color: getStarColor(i), fontSize: '1.5em'}}
                  onClick={() => click(i)}
                  onMouseEnter={() => hoverStar(i)}
                  onMouseLeave={hoverStarMouseOut} >
                ★
            </span>
        )
    }

    return <div>{stars}</div>;
}

export default Rating;
