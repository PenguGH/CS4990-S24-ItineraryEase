import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import './index.css'; // Importing the CSS file

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
    <div className="centered-container">
      <Container className="form-container">
        <h1 className="text-center mb-4">ItineraryEase: Travel Planner</h1>
        <h3 className="text-center mb-4">Your travel plans made simple.</h3>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <Form.Label>Total Budget</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter total budget"
              value={totalBudget}
              onChange={(e) => setTotalBudget(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Label>Duration (days)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Label>Number of Travelers</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number of travelers"
              value={numberOfTravelers}
              onChange={(e) => setNumberOfTravelers(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Label>Interests</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Label>Already Determined Activities</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter already determined activities"
              value={alreadyDeterminedActivities}
              onChange={(e) => setAlreadyDeterminedActivities(e.target.value)}
            />
          </div>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Generate Travel Plan
          </Button>
        </Form>
        
        {generatedPlan && (
          <div className="mt-4">
            <h2>Generated Plan</h2>
            <p>{generatedPlan}</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;