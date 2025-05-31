import React, { useEffect, useState } from 'react';
import GameList from '../components/GameList';
import LoadingSpinner from '../components/LoadingSpinner';
import ConfirmModal from '../components/ConfirmModal';
import { getGames, deleteGame } from '../api/gameApi';
import '../App.css';


// Game type
interface Game {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Fetch games on mount
  useEffect(() => {
    async function fetchGames() {
      setLoading(true);
      const data = await getGames();
      setGames(data);
      setLoading(false);
    }
    fetchGames();
  }, []);

  // Handle showing confirm delete modal
  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  // Handle confirmed deletion
  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    await deleteGame(deleteId);
    setGames(prev => prev.filter(game => game.id !== deleteId));
    setDeleteId(null);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <h1 className="page-title">Game Library</h1>
      {games.length === 0 ? (
        <p>No games added yet.</p>
      ) : (
        <GameList games={games} onDelete={handleDeleteClick} />
      )}
      <ConfirmModal
        show={showConfirm}
        onHide={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Game"
        body="Are you sure you want to delete this game?"
      />
    </>
  );
};

export default Home;
