# User API Gateway

This project implements a backend API gateway for managing user data. It provides various endpoints for creating, retrieving, and managing user information.
The software stack I choose is:

- Node.js for high performance event-driven server
- Express.js
- MongoDb for datastore

## Installation

- 1. Clone/Download the repo.
- 2. Run npm install.
- 3. Config the mongodb url with your mongo url.
- 4. Run nodemon index.js to spin the up the local dev server port 5000.(http://localhost:5000).

## Endpoints

### 1. POST /api/user/create-user
Creates a new user with the provided details.

#### Request Body:
- name: String (required)
- DOB: String (required, format: YYYY/MM/DD)
- age: Number (required)
- location: String (required)

- #### Sample Request:
```json
{
  "name": "John Doe",
  "DOB": "2003/08/03",
  "age": 21,
  "location": "New York"
}
```

### 2.  GET /api/user/alluser

Retrieves an array of all users.

#### Sample Response:
```json
[
  {
    "_id": "60a273373495a14f08d2b242",
    "name": "John Doe",
    "DOB": "2003-08-03T00:00:00.000Z",
    "age": 21,
    "location": "New York",
    "__v": 0
  },
  
]
```
### 3. GET /all-usernames

Retrieves an array of all user names.
#### Sample Response:
```json
["John Doe", "Jane Smith", "Alice Johnson", ...]
```
### 4. GET /api/user/singe-user/:id

Retrieves a single user from the database if it exist.

#### Sample Response:
```json
{
  "_id": "66124c9e9ee322870d71eaca",
  "name": "harsh singh",
  "age": 15,
  "DOB": "2003-08-03T00:00:00.000Z",
  "location": "Delhi",
  "__v": 0
}
```
### 5. POST /api/user/existence

Checks if a user with specific name exists or not and sends response in boolean.

#### Sample Request:
```json
{
  "name" : "harsh singh"
}
```
#### Sample Response:
```json
{
  "exists": true
}
```
### 6. POST /api/user/age

It retrieves all the users above a specific age.

#### Sample Request:
```json
{
  "age" : 15
}
```
#### Sample Response:
```json
[
  {
    "_id": "661239738d8a8fb2e5d9dd11",
    "name": "Harsh",
    "age": 25,
    "DOB": "2024-04-07T06:12:05.833Z",
    "location": "New York",
    "__v": 0
  },
  {
    "_id": "6612397b8d8a8fb2e5d9dd14",
    "name": "Rishi",
    "age": 20,
    "DOB": "2024-04-07T06:12:05.833Z",
    "location": "New York",
    "__v": 0
  },
  {
    "_id": "661241531cf4d9a4a4d49486",
    "name": "Harsh singh",
    "age": 30,
    "DOB": "2003-08-03T00:00:00.000Z",
    "location": "New York",
    "__v": 0
  },
  {
    "_id": "66124c9e9ee322870d71eaca",
    "name": "harsh singh",
    "age": 15,
    "DOB": "2003-08-03T00:00:00.000Z",
    "location": "Delhi",
    "__v": 0
  }
]
```

