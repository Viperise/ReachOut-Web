declare module 'react-rating-stars-component' {
  import React from 'react';

  interface RatingProps {
    count: number;
    onChange: (newRating: number) => void;
    size: number;
    activeColor: string;
  }

  const Rating: React.FC<RatingProps>;

  export default Rating;
}
