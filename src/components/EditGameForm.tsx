import React, { useState } from 'react'; // Import React and useState to handle form inputs
import { Form, Button } from 'react-bootstrap'; // Use Bootstrap form and button components
import '../App.css'; // Add custom styles from App.css

// Define the props for editing a game, including the game data and submit handler
interface EditGameFormProps {
  game: GameData;
  onSubmit: (updatedGame: GameData) => void;
}

// Define the structure for game data
interface GameData {
  id: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

const EditGameForm: React.FC<EditGameFormProps> = ({ game, onSubmit }) => {
  // Set initial form values from the existing game info
  const [title, setTitle] = useState(game.title);
  const [platform, setPlatform] = useState(game.platform);
  const [status, setStatus] = useState(game.status);
  const [review, setReview] = useState(game.review);
  const [coverImage, setCoverImage] = useState(game.coverImage);

  // Handle form submission and send updated data back to parent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default page reload
    onSubmit({ id: game.id, title, platform, status, review, coverImage }); // Pass updated game object
  };

  return (
    <Form onSubmit={handleSubmit} className="edit-game-form"> {/* Wrap inputs in a Bootstrap form */}

      <Form.Group className="mb-3" controlId="title"> {/* Title input */}
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="platform"> {/* Platform input */}
        <Form.Label>Platform</Form.Label>
        <Form.Control
          type="text"
          value={platform}
          onChange={e => setPlatform(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status"> {/* Status dropdown */}
        <Form.Label>Status</Form.Label>
        <Form.Select
          value={status}
          onChange={e => setStatus(e.target.value)}
          required
        >
          <option>Playing</option>
          <option>Completed</option>
          <option>Dropped</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="review"> {/* Review textarea */}
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review}
          onChange={e => setReview(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="coverImage"> {/* Cover image URL input */}
        <Form.Label>Cover Image URL</Form.Label>
        <Form.Control
          type="url"
          value={coverImage}
          onChange={e => setCoverImage(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">Update Game</Button> {/* Submit button */}
    </Form>
  );
};

export default EditGameForm; // Export the component for use elsewhere
