# Completed Tasks API

This project is a simple web application with a backend API built using Flask and a frontend that allows users to create and manage a list of tasks. The API provides five endpoints for retrieving, creating, and deleting tasks, and also includes Swagger documentation for easy API exploration.

## Features

- List all tasks
- Add a new task
- Delete a task
- Swagger documentation for the API
- Simple frontend interface to interact with the tasks API

## Project Structure

- `app.py`: Contains the Flask API with task management endpoints.
- `app.js`: JavaScript to handle frontend interactions and communication with the API.
- `style.css`: Styles for the frontend of the application.
- `index.html`: The main HTML page that loads the frontend.

## Endpoints

1. **GET /tasks**: Retrieve a list of all tasks.
2. **POST /tasks**: Create a new task. Requires a JSON body with a "title" field.
3. **DELETE /tasks/<task_id>**: Delete a task by its ID.
4. **GET /**: Serves the frontend.
5. **GET /api/docs**: Serves the Swagger documentation for the API.

## How to Run

### Requirements

The following Python packages are required:

- Flask
- Flask-CORS
- Flask-Swagger-UI

To install these dependencies, run:

```bash
pip install flask Flask-Cors flask-swagger-ui