import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';


interface EditGameFormProps {
  game: GameData;
  onSubmit: (updatedGame: GameData) => void;
}

interface GameData {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

const EditGameForm: React.FC<EditGameFormProps> = ({ game, onSubmit }) => {
  // Initialize form fields with existing game data
  const [title, setTitle] = useState(game.title);
  const [platform, setPlatform] = useState(game.platform);
  const [status, setStatus] = useState(game.status);
  const [review, setReview] = useState(game.review);
  const [coverImage, setCoverImage] = useState(game.coverImage);

  // Handle form submit, call onSubmit prop with updated game info
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: game.id, title, platform, status, review, coverImage });
  };

  return (
    <Form onSubmit={handleSubmit} className="edit-game-form">
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text" value={title} onChange={e => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="platform">
        <Form.Label>Platform</Form.Label>
        <Form.Control
          type="text" value={platform} onChange={e => setPlatform(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Select value={status} onChange={e => setStatus(e.target.value)} required>
          <option>Playing</option>
          <option>Completed</option>
          <option>Dropped</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="review">
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea" rows={3} value={review} onChange={e => setReview(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="coverImage">
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control
          type="url" value={coverImage} onChange={e => setCoverImage(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">Update Game</Button>
    </Form>
  );
};

export default EditGameForm;
