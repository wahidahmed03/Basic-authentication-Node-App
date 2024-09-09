
# Basic Authentication Node App

This is a simple RESTful API built with Node.js and Express.js that allows users to register, log in, and delete their accounts. The application uses JWT (JSON Web Tokens) for authentication and bcrypt for password hashing to ensure secure user management.


## Features

- **User Registration:** Allows new users to sign up by providing a username, email, and password. Passwords are securely hashed using bcrypt.
- **User Login:** Users can log in by providing their email and password. Upon successful login, a JWT token is generated for authentication.
- **User Deletion:** Authenticated users can delete their account by sending a request with a valid JWT token.
- Token-based Authentication: Protects routes with JWT to ensure only logged-in users can access certain endpoints.
## Endpoints
- **POST /register**
Registers a new user by accepting a username, email, and password.

- **POST /login**
 Authenticates a user by checking the email and password, and generates a JWT token upon successful login.

- **DELETE /delete**
Deletes the logged-in user's account. Requires a valid JWT token.
## Tech Stack

**Server:** Node, Express, bcrypt, fs

