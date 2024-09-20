import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ tasks }) => {
    const [taskStatuses, setTaskStatuses] = useState({});

    useEffect(() => {
        const fetchStatus = async (taskId) => {
            try {
                const response = await axios.get(`http://localhost:8000/api/tasks/${taskId}/`);
                setTaskStatuses((prevStatuses) => ({
                    ...prevStatuses,
                    [taskId]: response.data.status,
                }));
            } catch (error) {
                console.error('Error fetching task status:', error);
            }
        };

        const interval = setInterval(() => {
            tasks.forEach((taskId) => fetchStatus(taskId));
        }, 5000);

        return () => clearInterval(interval);
    }, [tasks]);

    return (
        <div>
            <h3>Task List</h3>
            {tasks.map((taskId) => (
                <div key={taskId}>
                    <p>Task ID: {taskId}</p>
                    <p>Status: {taskStatuses[taskId] || 'Loading...'}</p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
