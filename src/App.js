import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import LandingPage from "./Components/LandingPage/LandingPage";
import LandingPageMobile from "./Components/LandingPage/LandingPageMobile";
import BlogPost from "./BlogPost";
import loading from '../src/Components/Assets/loading.svg';

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={loading} width="100" height="50"/>
  </div>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);
  const [serverLoading, setServerLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setServerLoading(false);

      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll('video'));

      const mediaPromises = [
        ...images.map(img => new Promise(resolve => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = img.onerror = resolve;
          }
        })),
        ...videos.map(video => new Promise(resolve => {
          if (video.readyState === 4) {
            resolve();
          } else {
            video.onloadeddata = video.onerror = resolve;
          }
        }))
      ];

      await Promise.all(mediaPromises);
      setLoading(false);
    };

    loadData();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading || serverLoading) {
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
      <Analytics />
    </div>
  );
}

export default App;
