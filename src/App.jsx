import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout";
import TaskPage from "./pages/TaskPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/posts" element={<PostPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
