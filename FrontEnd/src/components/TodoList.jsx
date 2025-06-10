import React, { useState } from 'react'
import axios from "axios";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = () => {
        console.table([title, description, priority]);

        axios.post('http://localhost:3000/addTodo', {
            title,
            description,
            priority
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.error("Error: ", err);
        })

    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Add New Task</h2>

            <div className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Go to gym"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder:text-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Go to gym at 8 pm"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder:text-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                    </label>
                    <select
                        name="priority"
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                >
                    Add Todo
                </button>
            </div>
        </div>
    )
}

export default TodoList;