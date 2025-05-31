import React from 'react';
import '../App.css';


// Simple component to display review text
interface ReviewProps {
  review: string;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  if (!review) return null;

  return (
    <blockquote className="review-block blockquote mt-2 mb-0">
      <p>{review}</p>
    </blockquote>
  );
};

export default Review;
