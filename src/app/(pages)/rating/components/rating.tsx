'use client';
import React from 'react';
import Rating from 'react-rating-stars-component';

interface ReviewCardProps {
  title: string;
  establishmentName: string;
  feedback: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, establishmentName, feedback }) => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg mb-4 shadow">
      <div className="flex-1 mr-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-md font-semibold">{establishmentName}</h4>
        <p className="text-sm">
          Feedback: {feedback}....{' '}
          <a href="#" className="text-blue-500">
            Ver mais
          </a>
        </p>
      </div>
      <Rating count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
    </div>
  );
};

export default ReviewCard;
