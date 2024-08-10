Responsive Dashboard Application
Overview
This project is a fully responsive dashboard application built using React. It features interactive charts, a settings page, and a responsive sidebar, along with dark mode support and performance optimizations.

Features
Responsive Design: Optimized for both web and mobile devices using CSS Grid and Flexbox.
Interactive Widgets: Includes Line Chart, Bar Chart, Pie Chart, and Recent Activity Feed.
Dark Mode: Toggle between light and dark themes.
Settings Page: Form handling with validation.
Performance Optimizations: Lazy loading and code splitting.
State Management: Managed with React's hooks.
Technologies
Frontend: React (v18.3.1), Recharts, Axios, React Router
Styling: CSS, Tailwind CSS
APIs: JSONPlaceholder for mock data
Setup
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher) or Yarn
Installation
Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install Dependencies


npm install
# or
yarn install
Run the Development Server


npm start
# or
yarn start
The application will be available at http://localhost:3004.

Build for Production
Build the Application


npm run build
# or
yarn build
The build output will be in the build directory.

Running Tests
Run Unit Tests


npm test
# or
yarn test
Folder Structure

/src
  /components         # Reusable components
    /BarChartWidget
    /LineChartWidget
    /PieChartWidget
    /RecentActivityFeed
    /Settings
    /Header
    /Sidebar
    /Footer
  /pages              # Page components
    /Dashboard
  /App.css            # Global styles
  /index.css          # Component-specific styles
  /index.js           # Application entry point
/App.js               # Main application file
Environment Variables
Create a .env file in the root directory if you need to add any environment variables.

Contributing
Fork the Repository

Create a New Branch

git checkout -b feature/your-feature
Make Your Changes

Commit Your Changes


git add .
git commit -m "Add feature"
Push to Your Fork


git push origin feature/your-feature
Create a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React: A JavaScript library for building user interfaces.
Recharts: A composable charting library built on React components.
JSONPlaceholder: A free fake online REST API for testing and prototyping.
