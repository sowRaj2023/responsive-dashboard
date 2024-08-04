Dashboard Application
A responsive web application built with React.js that includes a dashboard with various widgets such as line charts, bar charts, pie charts, and recent activity feeds. The application supports light and dark modes and is designed to be fully responsive across different devices.

Table of Contents
Features
Technologies Used
Setup and Installation
Project Structure
Usage
Contributing
License
Features
Dashboard Widgets: Line chart, bar chart, pie chart, and recent activity feed.
Responsiveness: Fully responsive design using Flexbox and media queries.
Light and Dark Modes: Toggle between light and dark themes.
Error Handling: Proper error messages and loading states.
Mock Data Integration: Uses mock data for demonstration purposes.
Technologies Used
React.js: Frontend framework
Recharts: Chart library
CSS: Styling and responsiveness
React Router: Routing
Axios: Data fetching
Flexbox: Layout and responsiveness
Media Queries: Mobile-first design
Setup and Installation
Clone the Repository

bash
Copy code
git clone <repository-url>
cd <project-directory>
Install Dependencies

Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npm start
The application will be running on http://localhost:3000.

Project Structure
lua
Copy code
src/
|-- components/
|   |-- Header.js
|   |-- Sidebar.js
|   |-- Footer.js
|   |-- Dashboard.js
|   |-- BarChartWidget.js
|   |-- LineChartWidget.js
|   |-- PieChartWidget.js
|   |-- RecentActivityFeed.js
|   |-- LoadingSpinner.js
|   |-- Widget.css
|   |-- Header.css
|   |-- Sidebar.css
|   |-- Footer.css
|   |-- Dashboard.css
|   |-- LoadingSpinner.css
|   |-- Settings.js
|   |-- Settings.css
|-- App.js
|-- index.js
|-- styles/
|   |-- App.css
|-- api/
|   |-- mockData.js
|-- hooks/
|   |-- useTheme.js
Usage
Header: Contains the application title, profile, notifications, and theme toggle button.
Sidebar: Navigation menu with links to different dashboard pages.
Footer: Displays footer content.
Dashboard: Main page displaying various widgets such as line charts, bar charts, pie charts, and recent activities.
Widgets: Separate components for each type of chart and the recent activity feed.
Settings: Form for updating user settings.
Contributing
Fork the Repository: Create your own fork of the repository on GitHub.
Create a Branch: Create a new branch for your changes.
Commit Changes: Commit your changes with descriptive messages.
Push Changes: Push your changes to your forked repository.
Create a Pull Request: Submit a pull request to the original repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.
