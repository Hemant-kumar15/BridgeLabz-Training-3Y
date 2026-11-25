JS Query - Assignment 10

Every topic folder contains its own HTML, JS, style.css and db.json file.
Each db.json has at least five sample records.

Install JSON Server once:
npm install -g json-server@0.17.4

Open a separate terminal, go into the required topic folder, and run:

Real_Time_Live_Search: json-server --watch db.json --port 3001
Employee_Status_Dashboard: json-server --watch db.json --port 3002
Task_Manager_With_Filters: json-server --watch db.json --port 3003
Multi_API_Dashboard: json-server --watch db.json --port 3004
College_Timetable_Viewer: json-server --watch db.json --port 3005
User_Registration_With_Duplicate_Check: json-server --watch db.json --port 3006

Keep the server running and open the matching HTML file with VS Code Live Server.
