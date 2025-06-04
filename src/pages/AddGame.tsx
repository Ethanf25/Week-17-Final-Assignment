import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGame } from '../api/gameApi';
import LoadingSpinner from '../components/LoadingSpinner';
import AddGameForm from '../components/AddGameForm';
import '../App.css';

const AddGame: React.FC = () => { // this const defines the AddGame component
  const navigate = useNavigate(); // then we use the useNavigate hook to get the navigate function for routing
  const [loading, setLoading] = useState(false); // and then this sets up a loading state to show a spinner while the game is being added

  // This part is called when form submits new game data
  const handleAddGame = async (gameData: any) => { // it is a function to handle form submission
    setLoading(true); // this shows the loading spinner
    await createGame(gameData); // then it calls the 'createGame' API function to add the new game
    navigate('/'); // and then redirects to home after the game is added
  };

  if (loading) return <LoadingSpinner />; // then this shows that if it's loading, it will show the spinner

  return ( // finally, this returns the main content of the AddGame page
    <> {}
      <h1 className='add-game-title'>Add New Game</h1> {/* Page title */}
      <AddGameForm onSubmit={handleAddGame} /> {/* Render form and pass the submit handler */}
    </>
  );
};

export default AddGame; // Export
