import React from 'react';
import '../App.css';

const NotFound: React.FC = () => ( // this const defines the NotFound functional component
  <div className="text-center my-5"> {}
    <h2>404 - Page Not Found</h2> {/* Shows the 404 error message */}
    <p>Sorry, the page you requested does not exist.</p> {/* Show the message */}
  </div>
);

export default NotFound; // Export the NotFound component
