import React, { useEffect, useState } from 'react';
import GameList from '../components/GameList';
import LoadingSpinner from '../components/LoadingSpinner';
import ConfirmModal from '../components/ConfirmModal';
import { getGames, deleteGame } from '../api/gameApi';
import '../App.css';

// This defines the shape of a game object
interface Game { 
  id: string; // Using game ID
  title: string; // title
  platform: string; // Platform
  status: string; // Status
  review: string; // User's review
  coverImage: string; // Game cover image
}

const Home: React.FC = () => { // Then to define "Home functional component"
  const [games, setGames] = useState<Game[]>([]); // this initializes the state to hold an array of games
  const [loading, setLoading] = useState(true); // then tracks the loading state
  const [showConfirm, setShowConfirm] = useState(false); // then tracks whether to show the confirmation
  const [deleteId, setDeleteId] = useState<string | null>(null); // then tracks which game to delete


  useEffect(() => { // this runs once when the component mounts
    async function fetchGames() { // First, define the async function to get the games
      setLoading(true); // loading starts
      const data = await getGames(); // then it fetches the games
      setGames(data); // and then stores them
      setLoading(false); // and then stops loading
    }
    fetchGames(); // Call the fetch function
  }, []); // Empty dependency array, which means it runs only once

 
  const handleDeleteClick = (id: string) => { // next, when delete is clicked
    setDeleteId(id); // it saves the ID of the game to delete
    setShowConfirm(true); // and then shows the confirmation modal
  };

  // To handle a confirmed deletion
  const handleConfirmDelete = async () => { // When the user confirms a deletion
    if (!deleteId) return; // It will exit if there is no ID
    await deleteGame(deleteId); // then it calls the API to delete the game
    setGames(prev => prev.filter(game => game.id !== deleteId)); // and removes it from the state
    setDeleteId(null); // and then resets the delete ID
  };

  if (loading) return <LoadingSpinner />; // this will show the loading spinner while fetching the data

  return ( // this is the main content of the Home page, basically.....
    <> {}
      <h1 className="page-title">Game Library</h1> {}
      {games.length === 0 ? ( // ......If there are no games
        <p>No games added yet.</p> // Show this message
      ) : (
        <GameList games={games} onDelete={handleDeleteClick} /> // and then show the game list and pass delete handler
      )}
      <ConfirmModal
        show={showConfirm} // Show modal if true
        onHide={() => setShowConfirm(false)} // Close the modal on cancel
        onConfirm={handleConfirmDelete} // Call the function when confirmed
        title="Delete Game" // the modal title
        body="Are you sure you want to delete this game?" // Modal message
      />
    </>
  );
};

export default Home; // Export the Home component
