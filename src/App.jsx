import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Layout from "./components/Layout"; 

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PostPage" element={<PostPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
