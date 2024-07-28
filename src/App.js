import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import LandingPageMobile from "./Components/LandingPage/LandingPageMobile";
import BlogPost from "./BlogPost";

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
