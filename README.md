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

### 1. POST /create-user
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

### 1.  GET /alluser

Retrieves an array of all user names.

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
  // Other user objects...
]
```
### 3. GET /all-usernames

Retrieves an array of all user names.
#### Sample Response:
```json
["John Doe", "Jane Smith", "Alice Johnson", ...]
```

