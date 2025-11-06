import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout"; 
import TaskPage from "./pages/TaskPage";
import { ThemeProvider } from "./context/ThemeContext";

const AppShell = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Tasks" element={<TaskPage />} />
        <Route path="/Posts" element={<PostPage />} />
      </Routes>
    </Layout>
  );
};


function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Tasks" element={<TaskPage />} />
          <Route path="/Posts" element={<PostPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
