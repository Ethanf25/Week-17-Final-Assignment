import React from 'react';
import '../App.css';


// Simple component to display review text
interface ReviewProps {
  review: string;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  if (!review) return null;

  return ( //this function returns the review blockquote, a blockquote is used to display a review or quote within a styled block
    <blockquote className="review-block blockquote mt-2 mb-0"> 
      <p>{review}</p>
    </blockquote>
  ); // this is the end of the return statement
};

export default Review; //export for use in other components
