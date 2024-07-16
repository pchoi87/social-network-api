# Social Network API

## Description

This project is a Social Network API built using Express.js for routing, a MongoDB database, and the Mongoose ODM. The application allows users to share their thoughts, react to friends' thoughts, and create a friend list. The API is designed to handle large amounts of unstructured data efficiently, making it suitable for a social media platform.

## User Story

AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data  

## Acceptance Criteria

GIVEN a social network API  
- WHEN I enter the command to invoke the application, THEN my server is started, and the Mongoose models are synced to the MongoDB database.
- WHEN I open API GET routes in Insomnia for users and thoughts, THEN the data for each of these routes is displayed in a formatted JSON.
- WHEN I test API POST, PUT, and DELETE routes in Insomnia, THEN I am able to successfully create, update, and delete users and thoughts in my database.
- WHEN I test API POST and DELETE routes in Insomnia, THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Models](#models)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)

## Installation

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/pchoi87/social-network-api.git
    ```
2. Navigate to the project directory.
    ```bash
    cd social-network-api
    ```
3. Install the dependencies.
    ```bash
    npm install
    ```
4. Start the application.
    ```bash
    npm start
    ```

## Usage

To test the API routes, you can use Insomnia or any other API client. The server runs on `http://localhost:3001`.

## Walkthrough Video

https://drive.google.com/file/d/1iLK5-r0T-LPOjdjZ0NO9dHvYmBRMxTYP/view

