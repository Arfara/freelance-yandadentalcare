import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import LandingPageMobile from "./Components/LandingPage/LandingPageMobile";
import BlogPost from "./BlogPost";
import loading from '../src/Components/Assets/loading.mp4';

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <video src={loading} width="400" height="200" autoPlay loop muted />
  </div>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false);
    };

    loadData();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isMobile ? <LandingPageMobile /> : <LandingPage />} />
          <Route path="/blog/:slug" Component={BlogPost}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
