# CS4990-S24-ItineraryEase
ItineraryEase: Your travel plans made simple.

A travel planner that takes in user inputs, and recommends a detailed outline of what your next vacation will look like. Users fill out a form with info such as the destination, totalBudget, duration, numberOfTravelers, interests, alreadyDeterminedActivities and then they can generate a full itinerary based on their responses. This Itinerary will give you a rough idea of activities and things to do on your trip breaking it down day by day with estimated costs. The itinerary generation is Powered by my backend server that uses and calls the ChatGPT API in order to get a tailored response for all your traveling needs.

Example of User inputs for the Form:
![TravelPlanForm](images/Image1.png)

Example of resulting travel plan output:
![TravelPlanExamplePart1](images/travel_plan_1.png)
![TravelPlanExamplePart2](images/travel_plan_2.png)
The same structure applies for the rest of the full travel plan.

Check the example_output folder to view the entire example travel_plan.json result. To see what to expect your output to look like format wise.

## Note
My python flask server has to be running at the same time in order for this web application to work and make requests to the OPEN AI API.

Also need enough credits on OPEN AI account or else it cannot make the api calls.

With the server running and enough credits it works just as intended!

## Tech Stack
React.js front-end

Python flask back-end

Node.js cross platform runtime enviornment

Model: gpt-4-1106-preview (OpenAI completion model used to generate the custom travel plans)

## Available Scripts to run my app
npm install to install all necessary packages and dependencies.

npm start to run my app on [local host 3000](http://localhost:3000/)
