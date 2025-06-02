import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';

// Props: callback to submit the form
interface AddGameFormProps {
  onSubmit: (game: Omit<GameData, 'id'>) => void;
}

interface GameData {
  id?: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

const AddGameForm: React.FC<AddGameFormProps> = ({ onSubmit }) => {
  // Controlled form fields
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [status, setStatus] = useState('');
  const [review, setReview] = useState('');
  const [coverImage, setCoverImage] = useState('');

  // Handle form submit and call onSubmit prop with game data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, platform, status, review, coverImage });
  };

  return (
    <Form onSubmit={handleSubmit} className="add-game-form" autoComplete="off">
      <Form.Group className="mb-3" controlId="title">
        <Form.Label className='form-title'>Title</Form.Label>
        <Form.Control
          className='form-title-box'
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter game title"
          required
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="form-title-platform mb-3" controlId="platform">
        <Form.Label>Platform</Form.Label>
        <Form.Control
          className='form-platform-box'
          type="text"
          value={platform}
          onChange={e => setPlatform(e.target.value)}
          placeholder="Enter platform"
          required
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label className='form-title-status'>Status</Form.Label>
<Form.Select
  className={`form-status-box ${
    status === 'Playing' ? 'status-playing' :
    status === 'Completed' ? 'status-completed' :
    status === 'Dropped' ? 'status-dropped' :
    status === 'Select' ? 'status-select' : ''
  }`}
  value={status}
  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
  required
>
  <option value="">Select Status</option>
  <option value="Playing">Playing</option>
  <option value="Completed">Completed</option>
  <option value="Dropped">Dropped</option>
</Form.Select>

      </Form.Group>

      <Form.Group className="mb-3" controlId="review">
        <Form.Label className='form-review'>Review</Form.Label>
        <Form.Control
          className='form-review-box'
          as="textarea"
          rows={3}
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder="Write your review"
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="coverImage">
        <Form.Label className='form-coverimage'>Cover Image URL</Form.Label>
        <Form.Control
          className='form-url-box'
          type="url"
          value={coverImage}
          onChange={e => setCoverImage(e.target.value)}
          placeholder="Enter image URL"
          required
          autoComplete="off"
        />
      </Form.Group>

      <Button className='btn-add-game' variant="primary" type="submit">Add Game</Button>
    </Form>
  );
};

export default AddGameForm;
