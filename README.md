# Recipe AI - Your Personalized Recipe Generator

## Overview
Recipe AI is a powerful web application that lets users create unique recipes by simply providing a list of ingredients. Leveraging the latest technologies, including AWS Amplify, React, and a custom API, the app provides real-time recipe suggestions with seamless and interactive user experiences.

The project showcases my expertise in React, AWS Amplify, and full-stack development while emphasizing my ability to integrate cloud-based technologies and user authentication mechanisms.

## Features
🔍 Recipe Generation: Dynamically generate recipes based on user-provided ingredients.
🚀 Fast and Secure: Built using AWS Amplify, ensuring a secure and efficient backend.
🌟 Interactive UI: A sleek, intuitive design powered by React.js for seamless user interaction.
🧑‍💻 Authentication: Integrated user authentication for a personalized experience.
📱 Responsive Design: Fully responsive for use across devices (desktop, tablet, mobile).

## Technologies Used
Frontend-	React.js, HTML/CSS, AWS Amplify UI Components
Backend-	AWS Amplify, Amplify API, AWS Cognito
Tools-	AWS CLI, Git, VS Code
Hosting-	AWS Amplify

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your local machine:
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
Recipe Generation: The backend processes the input and dynamically generates a recipe using the provided data.
User Authentication: Login via AWS Cognito ensures a personalized experience.
Real-Time Updates: Leveraging React.js, the UI updates instantly based on user interactions.

## Live Demo
Link: https://main.d2ne5lxv2tdodf.amplifyapp.com/

## Screenshots

### Login Page 
![3420login](https://github.com/user-attachments/assets/9bf062f8-b98f-4555-9448-c9aa69a83af1)
Secure user authentication powered by AWS Amplify.



### Recipe Generator
![appss1](https://github.com/user-attachments/assets/3ce62ffc-47c5-40ce-b297-dcfc7b7218e1)
![appss2](https://github.com/user-attachments/assets/bcc78f6d-e5c7-4acf-ad4b-273a34414ee6)
![appss3](https://github.com/user-attachments/assets/cebad2cd-9abd-440a-ac12-66a9864741e7)
Seamless UI for entering ingredients and generating recipes.

### Challenges Faced
Authentication Integration: Setting up AWS Cognito for secure and scalable user authentication.
Dynamic Data Handling: Ensuring accurate and efficient handling of user inputs for recipe generation.
Cloud Deployment: Configuring AWS Amplify for seamless hosting and CI/CD.

### Future Enhancements (Scope)
Localization: Add support for multiple languages.
Analytics: Incorporate analytics to track recipe popularity.
AI Integration: Implement advanced AI algorithms for better recipe suggestions.

### License
This project is licensed under the MIT License




