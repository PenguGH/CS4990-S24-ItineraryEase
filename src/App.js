import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TravelPlanDetails from './TravelPlanDetails'; // Import the TravelPlanDetails component
import './index.css'; // Imports the css file

function App() {
  const [destination, setDestination] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState('');
  const [interests, setInterests] = useState('');
  const [alreadyDeterminedActivities, setAlreadyDeterminedActivities] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://9a836156-7d26-408c-aac2-c6526f81cf4e-00-23mzs6xu7wxec.kirk.replit.dev/travelplan/${destination}/${totalBudget}/${duration}/${numberOfTravelers}/${interests}/${alreadyDeterminedActivities}`);
      setGeneratedPlan(response.data);
      saveToPDF(response.data);
      navigate('/generated-plan');
      console.log("Success!");
    } catch (error) {
      console.error('Error generating plan. Please try again. This is the error:', error);
    }
  };

  // to save the travel plan as a file
  const saveToPDF = (data) => {
    // Convert JSON data to a formatted string
    const jsonString = JSON.stringify(data, null, 2);
    // Create a new Blob object
    const blob = new Blob([jsonString], { type: 'application/json' });
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    // Create a new anchor element
    const a = document.createElement('a');
    // Set the anchor's href attribute to the URL of the Blob
    a.href = url;
    // Set the anchor's download attribute to specify the file name
    a.download = 'travel_plan.json';
    // Programmatically click the anchor to trigger the download
    a.click();
    // Release the URL object
    URL.revokeObjectURL(url);
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
        
        {/* Render the TravelPlanDetails component if generatedPlan exists */}
        {generatedPlan && <TravelPlanDetails plan={generatedPlan} />}
      </Container>
    </div>
  );
}

export default App;