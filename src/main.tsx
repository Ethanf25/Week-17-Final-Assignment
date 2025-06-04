import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// to render the React app inside the HTML element
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( //use createRoot to enable concurrent features
  <React.StrictMode> {/* and this helps catch bugs and checks for best practices */}
    <BrowserRouter> {/* and then enables navigation and routing in the app */}
      <App /> {/* and finally renders the main App component */}
    </BrowserRouter>
  </React.StrictMode>,
);
