Frontend Assignment: Implement a Charting Library in React.js

Objective:
Create a React.js application that displays a chart using a charting library. The chart should support timeframe breakdown, timeframe zooming, and interactive click events. The chart data will be provided in JSON format.

Assignment Requirements:

1. Setup React.js Project:
   - Initialize a new React.js project.
   - Ensure the project is set up with TypeScript (optional but recommended for better type safety).

2. Charting Library Integration:
   - Choose a charting library that supports timeframe breakdown, zooming, and click events. Recommended libraries include:
     - [Chart.js](https://www.chartjs.org/)
     - [Recharts](https://recharts.org/)
     - [ApexCharts](https://apexcharts.com/)
     - [Highcharts](https://www.highcharts.com/)

3. JSON Data Handling:
   - Create a JSON file or an endpoint to serve chart data. The JSON data should include timestamps and values to be plotted. Make sure the data has over 100 points. 
   - Example JSON data structure:
     ```json
     [
       { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
       { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
       { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
       ...
     ]
     ```

4. Chart Implementation:
   - Display the chart using the selected charting library.
   - Implement timeframe breakdown (e.g., daily, weekly, monthly views).
   - Enable timeframe zooming to allow users to zoom in/out on specific time periods.
   - Add click event handlers to display details of the clicked data point (e.g., show a tooltip or a modal with more information).

5. User Interface:
   - Create a simple UI with buttons or dropdowns to switch between different timeframe breakdowns (e.g., daily, weekly, monthly).
   - Ensure the UI is responsive and user-friendly.

6. Export the chart as png/jpg formats. 


Evaluation Criteria:

1. Functionality:
   - Correct integration of the charting library.
   - Smooth and accurate timeframe breakdown and zooming functionalities.
   - Correct handling and display of JSON data.
   - Proper implementation of click events.

2. Code Quality:
   - Clean and maintainable code.
   - Proper use of React hooks and React.js features.
   - TypeScript usage (if applicable) and type safety.

3. User Experience:
   - Intuitive and responsive UI.
   - Smooth interactions and transitions.

4. Deployment:
   - Successful deployment and accessibility of the application.

Submission Instructions:
- Provide a link to the GitHub repository containing the source code.
- Include a README file with instructions on how to run the project locally.
- Provide the deployment link to the live application.

Assignment Ref Doc : https://satin-save-441.notion.site/Probz-AI-Assignment-Reference-Documen-d31c8ebc273945caaf2db087c92c75ff?pvs=4

Submission Form: https://forms.ccbp.in/ProbzAI_Assignment_Submission

Bonus Points:
- Implement additional features such as data filtering, custom tooltips, or animations.
- Use TypeScript for type safety and better code quality.
- Ensure the application is accessible and follows best practices for web accessibility.
