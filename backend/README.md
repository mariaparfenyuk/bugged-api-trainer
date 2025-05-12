# Bugged API Trainer - Backend Documentation

## Overview
The Bugged API Trainer is designed to help beginner QA engineers practice API testing by simulating buggy API endpoints. This backend serves as the core of the application, providing intentionally flawed endpoints for users to interact with.

## Project Structure
- **src/**: Contains the main application code.
  - **app.js**: Entry point for the application, sets up Express and middleware.
  - **routes/**: Contains route definitions for various API endpoints.
    - **index.js**: Main route configuration.
    - **login.js**: Routes for user login.
    - **users.js**: Routes for user management.
    - **orders.js**: Routes for order management.
  - **controllers/**: Contains the logic for handling requests.
    - **loginController.js**: Logic for user login.
    - **usersController.js**: Logic for user management.
    - **ordersController.js**: Logic for order management.
  - **services/**: Contains business logic for the application.
    - **loginService.js**: Business logic for handling login.
    - **usersService.js**: Business logic for user management.
    - **ordersService.js**: Business logic for order management.
  - **utils/**: Utility functions for the application.
    - **errorHandler.js**: Functions for error handling.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bugged-api-trainer.git
   ```
2. Navigate to the backend directory:
   ```
   cd bugged-api-trainer/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Environment Variables
Create a `.env` file in the backend directory and define the necessary environment variables for your application.

## Running the Application
To start the backend server, run:
```
npm start
```
The server will be available at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please follow the guidelines in the main repository README for contributing to this project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.