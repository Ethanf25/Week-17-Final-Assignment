import React from 'react';
import GameCard from './GameCard';
import "../App.css";



// Define props for list of games and delete function
interface Game {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

interface GameListProps { // Props for the GameList component
  games: Game[]; // Array of game objects to display
  onDelete: (id: string) => void;
} // Function to handle game deletion

// Display a grid of GameCards
const GameList: React.FC<GameListProps> = ({ games, onDelete }) => { // Define the GameList component
  return (// then render the list of games
    <div className="game-list d-flex flex-wrap justify-content-start">
      {games.map(game => (
        <GameCard key={game.id} {...game} onDelete={onDelete} /> // and then map each game to a GameCard component
      ))}
    </div>
  );
};

export default GameList; // Export the GameList component for use in other parts of the app
