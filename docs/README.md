# Bugged API Trainer Documentation

## Overview
The Bugged API Trainer is designed to help beginner QA engineers practice API testing by simulating buggy API endpoints. This project provides a hands-on experience for users to identify and troubleshoot common issues such as invalid responses, missing validations, and incorrect status codes.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **Node.js + Express**: The backend is built using Node.js and Express, featuring intentionally buggy endpoints for various functionalities including login, user management, and order processing.
- **Directory Structure**:
  - `src/app.js`: Entry point for the server application.
  - `src/routes/`: Contains route definitions for different functionalities.
  - `src/controllers/`: Contains business logic for handling requests.
  - `src/services/`: Contains service classes for business logic.
  - `src/utils/`: Contains utility functions, such as error handling.

### Frontend
- **React-based UI**: The frontend is a simple, Postman-like interface that allows users to send requests and view responses.
- **Directory Structure**:
  - `src/components/`: Contains reusable components for the UI.
  - `src/pages/`: Contains page components for different views.
  - `src/App.jsx`: Main application component that integrates all other components.

## Features
- **Intentionally Buggy Endpoints**: Each API endpoint is designed to return incorrect or incomplete responses to simulate real-world bugs.
- **Lightweight Interface**: The frontend provides a straightforward interface for sending requests and analyzing responses.
- **Incremental Development**: The project will grow incrementally, ensuring that each feature is functional before moving on to the next.

## Future Plans
- Support for XML handling.
- Implementation of automated tests for the trainer itself.
- Integration of CI/CD pipelines.
- Use of Docker for local development.

## Contribution
Contributions are welcome! Please refer to the `docs/tasks.md` for a list of tasks and how you can help improve the project.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.