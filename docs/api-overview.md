API Overview

Endpoints

Login

URL: /login
Method: POST
Request Body:
{ "username": "string", "password": "string" }
Responses:
200: Successful login
400: Invalid credentials
Registration

URL: /register
Method: POST
Request Body:
{
    "username": "string",
    "password": "string"
}
Responses:
200: Registration successful
400: Registration error