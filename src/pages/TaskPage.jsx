import React from "react";
import Button from "../components/Button.jsx"; // Import the Button
import Card from "../components/Card.jsx"; // Import the Card
import TaskManager from "../components/TaskManager.jsx";

function TaskPage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="py-8 px-4 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-3">Welcome to TaskMaster</h1>
          <Card >
            <TaskManager />
              </Card>
        </div>      
    </div>
  );
}

export default TaskPage;
