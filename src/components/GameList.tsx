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

interface GameListProps {
  games: Game[];
  onDelete: (id: string) => void;
}

// Display a grid of GameCards
const GameList: React.FC<GameListProps> = ({ games, onDelete }) => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {games.map(game => (
        <GameCard key={game.id} {...game} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default GameList;
