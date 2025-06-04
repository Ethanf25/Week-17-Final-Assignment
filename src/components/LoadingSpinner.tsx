import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../App.css';


// Reusable spinner for loading states when fetching data
const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner text-center my-5">
    <Spinner animation="border" role="status" />
  </div>
);

export default LoadingSpinner; // Export the LoadingSpinner
