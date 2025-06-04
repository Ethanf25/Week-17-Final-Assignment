import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';        
import AddGame from './pages/AddGame';
import EditGame from './pages/EditGame';
import NotFound from './pages/NotFound';
import About from './pages/About';
import './App.css';  // Import global styles


const App = () => ( // Main App component that sets up routing and layout
  <>
    <Header /> 
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home page with game list */}
        <Route path="/add" element={<AddGame />} /> {/* Add new game page */}
        <Route path="/edit/:id" element={<EditGame />} /> {/* Edit page for a specific game */}
        <Route path="*" element={<NotFound />} />        {/* Catch-all 404 page */}
        <Route path="/about" element={<About />} /> {} {/* About page with information */}
      </Routes>
    </div>
  </>
);

export default App; //export app
