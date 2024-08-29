# RetailerOfferRewards


This application Calculate the rewards points for customers based on therir transaction history.

## Features
- Calculate rewards points for each customer.
- Data fetch from local json file
- Display the points as per the Months and total


##
 - transaction.json   - sample transaction data file
 -src/components/RewardsCalculator.jsx  - Calaculate and Display the Points
 -src/components/PointsCalculate.jsx    - function for point calculation
 -src/components/RewardsCalculator.css   - style for the rewards component
 -src/App.jsx  :  Main app component
 -src/main.jsx  : Entry point for the application
 -src/index.css  : Global styles


##
  Running the JSON Server

   - The project uses a JSON server to mock backend API
      - npm install -g json server
       - To start JSON Server
          json-server --watch transaction.json  --5000   This will start a server at 'hhtp://localhost:500/' serving the content of transaction.json

##
- Clone the repository
- Run 'npm install' to install
- Run ' npm start



