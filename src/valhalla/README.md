# FILE: valhalla/valhalla/README.md
# This file contains the documentation for the project, including installation and usage instructions.

# Valhalla Counter

## Project Overview
The Valhalla Counter is a web application that allows users to enter their name and rate their experience. The data is stored in a MongoDB database, and a counter is automatically incremented with each new entry.

## Project Structure
```
valhalla
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── api
│   │   └── counterService.js
│   ├── models
│   │   └── Counter.js
│   └── config
│       └── db.js
├── server
│   ├── index.js
│   ├── controllers
│   │   └── counterController.js
│   ├── models
│   │   └── Counter.js
│   └── routes
│       └── counterRoutes.js
├── package.json
├── .env
└── README.md
```

## Installation

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd valhalla
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up MongoDB**:
   Ensure that MongoDB is installed and running on your machine. Create a database named `valhalle`.

4. **Configure environment variables**:
   Create a `.env` file in the root directory and add your MongoDB URI:
   ```
   MONGODB_URI=mongodb://localhost:27017/valhalle
   ```

## Usage

1. **Start the server**:
   ```
   cd server
   node index.js
   ```

2. **Run the React application**:
   ```
   cd src
   npm start
   ```

3. **Access the application**:
   Open your browser and navigate to `http://localhost:3000` to use the Valhalla Counter.

## API Endpoints

- **POST /api/counters**: Create a new counter entry with a name and experience rating.

## Features

- User input for name and experience rating.
- Data is stored in MongoDB.
- Automatic counter increment with each new entry.

## Testing

You can test the API using tools like Postman to ensure that data is being stored correctly and the counter is incrementing as expected.