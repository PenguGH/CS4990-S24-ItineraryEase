import React from 'react';

const TravelPlanDetails = ({ plan }) => {
  // Check if the travel plan is undefined or if any of its required properties are undefined before rendering
  if (!plan || !plan.travel_plan) {
    return <div>Check your downloads folder for your travel_plan.json file!</div>;
  }

  // Destructure plan object for easier access
  const { destination, budget, duration_days, travelers, determined_activities } = plan.travel_plan;

  // Function to render list items for each property
  const renderListItems = (items) => {
    if (!items || !Array.isArray(items)) {
      return null;
    }
    return items.map((item, index) => <li key={index}>{item}</li>);
  };

  // Render the travel plan details
  return (
    <div>
      <h2>Generated Travel Plan</h2>
      <p><strong>Destination:</strong> {destination}</p>
      <p><strong>Total Budget:</strong> {budget}</p>
      <p><strong>Duration:</strong> {duration_days}</p>
      <p><strong>Number of Travelers:</strong> {travelers}</p>
      
      {/* Render determined activities */}
      <h3>Determined Activities:</h3>
      <ul>
        {renderListItems(determined_activities)}
      </ul>

      {/* Render each of the individual properties */}
      <h3>Itinerary:</h3>
      <ul>
        {renderListItems(plan.itinerary)}
      </ul>

      <h3>Accommodations:</h3>
      <ul>
        {renderListItems(plan.accommodations)}
      </ul>

      <h3>Daily Expenses:</h3>
      <ul>
        {renderListItems(plan.daily_expenses)}
      </ul>

      <h3>Transportation:</h3>
      <ul>
        {renderListItems(plan.transportation)}
      </ul>

      <h3>Dining Options:</h3>
      <ul>
        {renderListItems(plan.dining_options)}
      </ul>

      <h3>Additional Activities:</h3>
      <ul>
        {renderListItems(plan.additional_activities)}
      </ul>

      <p><strong>Total Estimated Cost:</strong> {plan.total_estimated_cost}</p>
    </div>
  );
};

export default TravelPlanDetails;