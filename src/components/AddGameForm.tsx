import React, { useState } from 'react'; // I imported React and useState so I can manage form input values
import { Form, Button } from 'react-bootstrap'; // I brought in Bootstrap components to help style the form
import '../App.css'; // Here I connected the custom styles I made in App.css

// I defined the props that this component expects — a function to run when the form submits
interface AddGameFormProps {
  onSubmit: (game: Omit<GameData, 'id'>) => void;
}

// I set up the structure for what each game object should contain
interface GameData {
  id?: string;
  title: string;
  platform: string;
  status: string;
  review: string;
  coverImage: string;
}

const AddGameForm: React.FC<AddGameFormProps> = ({ onSubmit }) => {
  // I created a state variable for each form field so I can keep track of what the user types
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [status, setStatus] = useState('');
  const [review, setReview] = useState('');
  const [coverImage, setCoverImage] = useState('');

  // Here I handled the form submission and sent the form data back to the parent component
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // I prevented the default behavior (which is reloading the page)
    onSubmit({ title, platform, status, review, coverImage }); // I passed the input values back up as a game object
  };

  return (
    <Form onSubmit={handleSubmit} className="add-game-form" autoComplete="off"> {/* I wrapped everything in a Bootstrap form */}

      <Form.Group className="mb-3" controlId="title"> {/* This section is where I handled the game title input */}
        <Form.Label className='form-title'>Title</Form.Label>
        <Form.Control
          className='form-title-box'
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)} // As the user types, I update the state
          placeholder="Enter game title"
          required
        />
      </Form.Group>

      {/* I repeated the same setup for platform — same logic, just different labels and state */}
      <Form.Group className="form-title-platform mb-3" controlId="platform">
        <Form.Label>Platform</Form.Label>
        <Form.Control
          className='form-platform-box'
          type="text"
          value={platform}
          onChange={e => setPlatform(e.target.value)}
          placeholder="Enter platform"
          required
        />
      </Form.Group>

      {/* Here I gave the user a dropdown to choose their game status */}
      <Form.Group className="mb-3" controlId="status">
        <Form.Label className='form-title-status'>Status</Form.Label>
        <Form.Select
          className={`form-status-box ${
            status === 'Playing' ? 'status-playing' :
            status === 'Completed' ? 'status-completed' :
            status === 'Dropped' ? 'status-dropped' :
            status === 'Select' ? 'status-select' : ''
          }`} // I added dynamic classes based on the selected status to style it differently
          value={status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option> {/* This is the default blank option */}
          <option value="Playing">Playing</option>
          <option value="Completed">Completed</option>
          <option value="Dropped">Dropped</option>
        </Form.Select>
      </Form.Group>

      {/* Now I added a multi-line textarea so the user can write a review */}
      <Form.Group className="mb-3" controlId="review">
        <Form.Label className='form-review'>Review</Form.Label>
        <Form.Control
          className='form-review-box'
          as="textarea"
          rows={3}
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder="Write your review"
        />
      </Form.Group>

      {/* I included one last input for the user to paste a URL for the game’s cover image */}
      <Form.Group className="mb-3" controlId="coverImage">
        <Form.Label className='form-coverimage'>Cover Image URL</Form.Label>
        <Form.Control
          className='form-url-box'
          type="url"
          value={coverImage}
          onChange={e => setCoverImage(e.target.value)}
          placeholder="Enter image URL"
          required
        />
      </Form.Group>

      {/* Finally, I added a submit button to trigger the form submission */}
      <Button className='btn-add-game' variant="primary" type="submit">
        Add Game
      </Button>
    </Form>
  );
};

export default AddGameForm; // I exported the component so I can use it in other files like App.tsx
