import React, { useEffect, useState } from 'react';
import EditGameForm from '../components/EditGameForm';
import { useNavigate, useParams } from 'react-router-dom';
import { getGameById, updateGame } from '../api/gameApi';
import LoadingSpinner from '../components/LoadingSpinner';
import '../App.css';


interface GameData {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

const EditGame: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<GameData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch existing game data by id on mount
  useEffect(() => {
    async function fetchGame() {
      if (!id) return;
      setLoading(true);
      const data = await getGameById(id);
      setGame(data);
      setLoading(false);
    }
    fetchGame();
  }, [id]);

  // Handle form submit with updated game info
  const handleUpdateGame = async (updatedGame: GameData) => {
    if (!id) return;
    setLoading(true);
    await updateGame(id, updatedGame);
    setLoading(false);
    navigate('/'); // Redirect to home after update
  };

  if (loading) return <LoadingSpinner />;

  if (!game) return <p>Game not found.</p>;

  return (
    <>
      <h1 className="page-title">Edit Game</h1>
      <EditGameForm game={game} onSubmit={handleUpdateGame} />
    </>
  );
};

export default EditGame;
