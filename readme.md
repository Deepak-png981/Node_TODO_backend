# Todo App Backend (Node.js)

A robust backend for a Todo application built with Node.js. This backend supports user authentication, cookies, and a full suite of CRUD operations for managing tasks.

## Features

- **User Authentication**: Secure login and logout functionality.
- **Cookies**: User sessions are managed with cookies to ensure seamless user experience.
- **CRUD Operations**: Users can create, read, update, and delete tasks with their titles and descriptions.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

\```bash
git clone [YOUR REPOSITORY URL]
\```

2. Navigate to the project directory:

\```bash
cd [YOUR REPOSITORY NAME]
\```

3. Install the required packages:

\```bash
npm install
\```

### Running the Application

Start the server:

\```bash
npm start
\```

The application should now be running at `http://localhost:YOUR_PORT_NUMBER`.

## API Endpoints

1. **User Authentication**
   - `/login`: POST endpoint for user login.
   - `/logout`: POST endpoint for user logout.

2. **Tasks**
   - `/tasks`: GET endpoint to retrieve all tasks.
   - `/tasks/:id`: GET endpoint to retrieve a specific task by its ID.
   - `/tasks`: POST endpoint to create a new task.
   - `/tasks/:id`: PUT endpoint to update a task.
   - `/tasks/:id`: DELETE endpoint to remove a task.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License. See `LICENSE` for more details.
