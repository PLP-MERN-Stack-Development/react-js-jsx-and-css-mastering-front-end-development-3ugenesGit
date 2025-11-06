import React from "react";
import Button from "../components/Button.jsx"; // Import the Button
import Card from "../components/Card.jsx"; // Import the Card
import TaskManager from "../components/TaskManager.jsx";

function TaskPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 px-6 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TaskMaster</h1>
          <Card >
            <TaskManager />
              </Card>
        </div>      
    </div>
    );
}

export default TaskPage;