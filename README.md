Bugged API Trainer 🐞

Project Overview
Bugged API Trainer is an interactive tool designed for beginner QA engineers to practice API testing. The application simulates buggy API endpoints, allowing users to identify issues such as invalid responses, missing validations, and incorrect status codes.

Goals

Provide a hands-on training environment for QA engineers to enhance their API testing skills.
Simulate real-world scenarios with intentionally buggy API endpoints.
Architecture

Backend: A Node.js + Express mock server with intentionally buggy endpoints for login, users, orders, etc.
Frontend: A React-based UI that mimics Postman, enabling users to send requests and view responses.
Features

Intentionally incorrect or incomplete API responses to simulate real bugs.
A lightweight interface for sending requests and analyzing responses.
Incremental development approach, ensuring each feature is functional before merging.
Principles

Maintain high code quality, modularity, and maintainability.
Follow MVP philosophy: every step should result in a usable product.
Future enhancements include XML handling, automated tests, CI/CD pipelines, and Docker support.
Getting Started

Clone the repository:
git clone https://github.com/yourusername/bugged-api-trainer.git

Navigate to the backend directory and install dependencies:
cd bugged-api-trainer/backend
npm install

Set up environment variables in the .env file.

Start the backend server:
npm start

Navigate to the frontend directory and install dependencies:
cd ../frontend
npm install

Start the frontend application:
npm start

Documentation

Backend Documentation: README.md
Frontend Documentation: README.md
Architecture Overview: architecture.md
Use Cases: use-cases.md
Development Tasks: tasks.md
Testing

Run backend tests:
npm test

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.