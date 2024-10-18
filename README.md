
Monday.com Client Portal

Overview

This project is a custom client portal plugin for Monday.com. It is designed to securely share selected information and board items with clients. The portal mirrors key elements from a Monday.com board, allowing clients to see specific tasks, statuses, and priority levels assigned to them. The project leverages Monday.com’s GraphQL API to fetch and display data dynamically.

Features

	•	Client-specific views: Clients can see only the items relevant to them.
	•	Board item display: Dynamically fetches and displays Monday.com board items with statuses, priorities, and text.
	•	Real-time refresh: Simple refresh button for fetching the latest updates from the board.
	•	OAuth2 Authentication: Secure authentication for accessing Monday.com data.
	•	Responsive Design: Adapted for both desktop and mobile.

Technologies

	•	Frontend: React, Monday UI Components, CSS for styling.
	•	Backend: Node.js, Express, Axios for handling API requests to Monday.com.
	•	API Integration: Monday.com GraphQL API for querying boards and items.
	•	Authentication: OAuth2 flow for securely accessing Monday.com data.

Setup and Installation

1. Clone the repository:

git clone https://github.com/hab1b/mondayDotCom_client_portal.git
cd mondayDotCom_client_portal

2. Install dependencies:

npm install

3. Set up environment variables:

Create a .env file in the root directory and add the following:

CLIENT_ID=your_monday_client_id
CLIENT_SECRET=your_monday_client_secret
SESSION_KEY=your_random_session_key

4. Run the backend server:

npm run server

The server will start at http://localhost:5001.

5. Run the frontend (React app):

npm start

The React app will start at http://localhost:3000.

Usage

	1.	Go to the homepage at http://localhost:3000.
	2.	Authenticate via Monday.com by following the OAuth flow.
	3.	Once authenticated, you can view the board items, status, and priority in the portal.

Project Structure

mondayDotCom_client_portal/
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── App.js         # Main React component
│   │   └── index.js       # Entry point
├── server/                # Backend Express application
│   ├── server.js          # Main server script
│   ├── api.js             # Monday.com API request helper
├── .env                   # Environment variables (not included in repo)
├── README.md              # This README file
└── package.json           # Node dependencies and scripts

API Integration

The project uses Monday.com’s GraphQL API to query the following:

	•	Boards and Items: Fetches boards and items associated with specific clients.
	•	Status and Priority Mapping: Maps status and priority index values from Monday.com to readable strings (e.g., “Working on it”, “High Priority”).

Example GraphQL Query

query {
  boards(ids: 123456789) {
    items {
      name
      column_values {
        id
        text
        value
      }
    }
  }
}

Contributing

Contributions are welcome! Please submit a pull request or open an issue for discussion.

License

This project is licensed under the MIT License.
