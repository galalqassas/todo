from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

tasks = [

]


@app.route('/')
def hello_world():
    return render_template('index.html')

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

tasks = []  # In-memory task list

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

# Create a new task
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    if 'title' not in data:
        return jsonify({"message": "Invalid input"}), 400
    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"],
        "completed": False
    }
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return jsonify({"message": "Task deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(port=5000)
CORS(app)