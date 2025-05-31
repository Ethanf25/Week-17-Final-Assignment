import React from 'react';
import { Spinner } from 'react-bootstrap';

// Reusable spinner for loading states
const LoadingSpinner: React.FC = () => (
  <div className="text-center my-5">
    <Spinner animation="border" role="status" />
  </div>
);

export default LoadingSpinner;
