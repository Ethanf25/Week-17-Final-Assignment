import React, { useEffect, useState } from 'react'; // Import React and hooks for state and lifecycle
import EditGameForm from '../components/EditGameForm'; // Import the form used to edit a game
import { useNavigate, useParams } from 'react-router-dom'; // Import hooks to get route params and navigate
import { getGameById, updateGame } from '../api/gameApi'; // Import API functions to get and update game
import LoadingSpinner from '../components/LoadingSpinner'; // Import loading spinner component
import '../App.css'; // Import styles

interface GameData { // Define the shape of a game object
  id: string; // Game ID
  title: string; // Game title
  platform: string; // Game platform (e.g., PS5, PC)
  status: string; // Game status (e.g., Playing, Completed)
  review: string; // User's review of the game
  coverImage: string; // URL to the game's cover image
}

const EditGame: React.FC = () => { // this function defines the EditGame functional component
  const { id } = useParams<{ id: string }>(); // so first, we get the game ID
  const [game, setGame] = useState<GameData | null>(null); // then store the current game data
  const [loading, setLoading] = useState(true); // and then track whether the data is loading
  const navigate = useNavigate(); // and finally hook to navigate to another page

  // This shows how to fetch existing game data by id
  useEffect(() => { // so this "useEffect" runs when the component mounts or when the ID changes
    async function fetchGame() { // then defines the async function to fetch the game data
      if (!id) return; // this says "if no ID, do nothing"
      setLoading(true); // then shows the loading spinner
      const data = await getGameById(id); // then gets the game data from the API
      setGame(data); // and stores it in the state
      setLoading(false); // then stops the loading spinner
    }
    fetchGame(); // then call the fetch function
  }, [id]); // and only re-run when the ID changes

  // To handle form submit with updated game info
  const handleUpdateGame = async (updatedGame: GameData) => { // the fuunction to handle form submit
    if (!id) return; // If no ID, do nothing
    setLoading(true); // Show loading spinner
    await updateGame(id, updatedGame); // Call API to update the game
    setLoading(false); // Hide loading spinner
    navigate('/'); // Redirect to home
  };

  if (loading) return <LoadingSpinner />; // Show spinner while loading

  if (!game) return <p>Game not found.</p>; // Show message if no game data was found

  return ( // this is the return statement that renders the edit game page that includes the page title and the edit form
    <> {}
      <h1 className="page-title">Edit Game</h1> {}
      <EditGameForm game={game} onSubmit={handleUpdateGame} /> {}
    </>
  );
};

export default EditGame; // Export the component
