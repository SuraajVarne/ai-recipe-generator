# Recipe AI - Your Personalized Recipe Generator

## Overview
Recipe AI is an innovative web application that allows users to create unique recipes by simply providing a list of ingredients. Built with modern technologies such as AWS Amplify, React.js, and a custom API, the application offers real-time recipe suggestions while ensuring a smooth and interactive user experience. This project demonstrates expertise in full-stack development and the integration of cloud technologies for performance, security, and scalability.

## Features
◉Recipe Generation: Automatically generates customized recipes based on a list of user-provided ingredients.
◉Fast & Secure: Developed using AWS Amplify, ensuring efficient, secure backend operations with cloud integration.
◉Interactive UI: Intuitive, responsive user interface powered by React.js for seamless interaction.
◉User Authentication: Secure user authentication using AWS Cognito, offering a personalized experience.
◉Responsive Design: Optimized for use across all devices (desktop, tablet, and mobile).


## Technologies Used
Frontend: React.js, HTML/CSS, AWS Amplify UI Components
Backend: AWS Amplify, AWS Cognito, Amplify API
Tools: AWS CLI, Git, VS Code
Hosting: AWS Amplify

## Setup Instructions

### Prerequisites
Ensure you have the following tools installed:

Node.js (v14 or higher)
AWS CLI
Git

### Steps to Run Locally
Clone the Repository:
```bash
git clone https://github.com/SuraajVarne/recipe-ai.git
cd recipe-ai
```

Install Dependencies:
```bash
npm install
```

Set Up AWS Amplify: Initialize AWS Amplify in your local environment:
```bash
amplify init
```

Start the Development Server:
```bash
npm start
```

Access the App: Visit http://localhost:3000 in your browser.

## How It Works
Input Ingredients: Users type a list of ingredients into the search bar.
Recipe Generation: The backend processes the input and dynamically generates a recipe based on the provided ingredients.
User Authentication: AWS Cognito handles secure user login to deliver a personalized recipe generation experience.
Real-Time Updates: The user interface updates instantly as the user interacts, powered by React.js.
## Live Demo
Link: https://main.d2ne5lxv2tdodf.amplifyapp.com/

## Screenshots

### Login Page 
![3420login](https://github.com/user-attachments/assets/9bf062f8-b98f-4555-9448-c9aa69a83af1)
Secure user authentication powered by AWS Amplify.



### Recipe Generator
![appss1](https://github.com/user-attachments/assets/3ce62ffc-47c5-40ce-b297-dcfc7b7218e1)
![appss2](https://github.com/user-attachments/assets/bcc78f6d-e5c7-4acf-ad4b-273a34414ee6)
![appss3](https://github.com/user-attachments/assets/888263f9-c136-4c1c-bd87-dfd5fd6e03c3)

Seamless UI for entering ingredients and generating recipes.

## Challenges Faced
Authentication Integration: Setting up AWS Cognito for secure and scalable user authentication.
Dynamic Data Handling: Ensuring accurate and efficient handling of user inputs for recipe generation.
Cloud Deployment: Configuring AWS Amplify for seamless hosting and CI/CD.

## Future Enhancements (Scope)
Localization: Add support for multiple languages.
Analytics: Incorporate analytics to track recipe popularity.
AI Integration: Implement advanced AI algorithms for better recipe suggestions.

## License
This project is licensed under the MIT License.
