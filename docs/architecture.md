# Architecture of Bugged API Trainer

## Overview
The Bugged API Trainer is designed to help beginner QA engineers practice API testing by simulating buggy API endpoints. The architecture consists of a Node.js backend with an Express server and a React-based frontend that mimics a Postman-like interface.

## Backend Architecture
- **Node.js + Express**: The backend is built using Node.js and Express, providing a lightweight and efficient server environment.
- **Mock Server**: The server includes intentionally buggy endpoints for various functionalities:
  - **Login Endpoint**: Simulates login functionality with potential issues like incorrect status codes and missing validations.
  - **Users Endpoint**: Manages user-related operations, including creating, retrieving, updating, and deleting users, with hidden bugs.
  - **Orders Endpoint**: Handles order processing with deliberate errors in responses.

### Directory Structure
- **src**: Contains the main application code.
  - **app.js**: Entry point for the application, setting up middleware and routes.
  - **routes**: Defines the API routes.
    - **index.js**: Main route configuration.
    - **login.js**: Routes for login operations.
    - **users.js**: Routes for user management.
    - **orders.js**: Routes for order management.
  - **controllers**: Contains the logic for handling requests.
    - **loginController.js**: Logic for login operations.
    - **usersController.js**: Logic for user management.
    - **ordersController.js**: Logic for order processing.
  - **services**: Contains business logic for each feature.
    - **loginService.js**: Business logic for login.
    - **usersService.js**: Business logic for user operations.
    - **ordersService.js**: Business logic for order handling.
  - **utils**: Utility functions, including error handling.

## Frontend Architecture
- **React-based UI**: The frontend is built using React, providing a user-friendly interface for API testing.
- **Components**:
  - **RequestForm**: Component for sending API requests.
  - **ResponseViewer**: Component for displaying API responses.
  - **Header**: Component for the application header.
- **Pages**:
  - **Home**: Main landing page of the application.
  - **ApiTester**: Page dedicated to testing APIs.

### Directory Structure
- **src**: Contains the main application code.
  - **components**: Reusable UI components.
  - **pages**: Different views of the application.
  - **App.jsx**: Main application component that integrates all other components.
  - **index.js**: Entry point for the frontend application.

## Principles
- **Intentionally Buggy Responses**: The API endpoints are designed to return incorrect or incomplete responses to simulate real-world bugs.
- **MVP Philosophy**: Each feature is developed incrementally, ensuring that the application remains functional at all times.
- **Code Quality**: Emphasis on modularity, maintainability, and readability, adhering to senior-level coding standards.

## Future Plans
- Implement XML handling for API requests and responses.
- Develop automated tests for the trainer itself.
- Set up CI/CD pipelines for streamlined deployment.
- Utilize Docker for local development and testing environments.