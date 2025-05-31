import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import Review from './Review';
import '../App.css';  // you can keep this or move styles to a new CSS file

// Define props for game info and delete handler
interface GameCardProps {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
  onDelete: (id: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({
  id, title, platform, status, review, coverImage, onDelete,
}) => {
  return (
    <Card className="game-card mb-3">
      <Card.Img
        variant="top"
        src={coverImage}
        alt={title}
        className="game-card-img game-card-img-top"
      />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Subtitle className="mb-2 platform-text">{platform}</Card.Subtitle>
        <StatusBadge status={status} />
        <Review review={review} />
        <div className="d-flex justify-content-between mt-3">
          <Link to={`/edit/${id}`} className="btn-edit btn btn-primary btn-sm">Edit</Link>
          <Button className='btn-delete' variant="danger" size="sm" onClick={() => onDelete(id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
