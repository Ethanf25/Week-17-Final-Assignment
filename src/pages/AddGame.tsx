import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGame } from '../api/gameApi';
import LoadingSpinner from '../components/LoadingSpinner';
import AddGameForm from '../components/AddGameForm';
import '../App.css';


const AddGame: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Called when form submits new game data
  const handleAddGame = async (gameData: any) => {
    setLoading(true);
    await createGame(gameData);
    setLoading(false);
    navigate('/'); // Redirect to home after add
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <h1 className='add-game-title'>Add New Game</h1>
      <AddGameForm onSubmit={handleAddGame} />
    </>
  );
};

export default AddGame;

