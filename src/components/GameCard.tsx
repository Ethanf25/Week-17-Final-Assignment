import React from 'react'; // Import React to build the component
import { Card, Button } from 'react-bootstrap'; // Use Bootstrap Card and Button components
import { Link } from 'react-router-dom'; // Link for navigation to the edit page
import StatusBadge from './StatusBadge'; // Show game status with a badge
import Review from './Review'; // Display the game review
import '../App.css'; // Import custom styles

// Below are the props that GameCard component will accept
interface GameCardProps {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
  onDelete: (id: string) => void; // Function to handle game deletion
}

const GameCard: React.FC<GameCardProps> = ({
  id, title, platform, status, review, coverImage, onDelete,
}) => {
  return (
    <Card className="game-card mb-3"> {/* Bootstrap card wrapper */}
      <Card.Img
        variant="top"
        src={coverImage} // Show game cover image
        alt={title} // Alt text for accessibility
        className="game-card-img game-card-img-top"
      />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title> {/* Game title */}
        <Card.Subtitle className="mb-2 platform-text">{platform}</Card.Subtitle> {/* Platform info */}
        <StatusBadge status={status} /> {/* Status badge component */}
        <Review review={review} /> {/* Review component */}
        <div className="d-flex justify-content-between mt-3"> {/* Buttons container */}
          <Link to={`/edit/${id}`} className="btn-edit btn btn-primary btn-sm">Edit</Link> {/* Edit button */}
          <Button className='btn-delete' variant="danger" size="sm" onClick={() => onDelete(id)}>Delete</Button> {/* Delete button */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard; // Export component for use in other parts of the app
