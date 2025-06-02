import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';        
import AddGame from './pages/AddGame';
import EditGame from './pages/EditGame';
import NotFound from './pages/NotFound';
import About from './pages/About';
import './App.css';  // Import global styles


const App = () => (
  <>
    <Header />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home page with game list */}
        <Route path="/add" element={<AddGame />} />
        <Route path="/edit/:id" element={<EditGame />} />
        <Route path="*" element={<NotFound />} />        {/* Catch-all 404 page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>
);

export default App;
