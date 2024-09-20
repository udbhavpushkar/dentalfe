import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/tasks/', {
                title,
                description,
            });
            onTaskCreated(response.data.task_id);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create a New Task</h3>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
