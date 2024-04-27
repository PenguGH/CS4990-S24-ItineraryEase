import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

function App() {
  const [destination, setDestination] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState('');
  const [interests, setInterests] = useState('');
  const [alreadyDeterminedActivities, setAlreadyDeterminedActivities] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://example.com/generate-plan', {
        destination,
        totalBudget,
        duration,
        numberOfTravelers,
        interests,
        alreadyDeterminedActivities,
      });
      setGeneratedPlan(response.data.plan);
    } catch (error) {
      console.error('Error generating plan:', error);
    }
  };

  return (
    <Container>
      <h1>Travel Planner</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="totalBudget">
          <Form.Label>Total Budget</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter total budget"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration (days)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="numberOfTravelers">
          <Form.Label>Number of Travelers</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number of travelers"
            value={numberOfTravelers}
            onChange={(e) => setNumberOfTravelers(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="interests">
          <Form.Label>Interests</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="alreadyDeterminedActivities">
          <Form.Label>Already Determined Activities</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter already determined activities"
            value={alreadyDeterminedActivities}
            onChange={(e) => setAlreadyDeterminedActivities(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Generate Travel Plan
        </Button>
      </Form>

      {generatedPlan && (
        <div>
          <h2>Generated Plan</h2>
          <p>{generatedPlan}</p>
        </div>
      )}
    </Container>
  );
}

export default App;