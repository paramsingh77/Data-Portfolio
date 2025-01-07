import './App.css';
import Header from './Components/Header';
import Me from './Components/Me';
import WorkExperience from './Components/WorkExperience';
import CursorEffect from './Components/CursorEffect';
import Projectss from './Components/Projectss';
import Blog from './Components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProjects from './Components/AllProjects';
import AllPosts from './Components/AllPosts';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <CursorEffect />
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Me />
                <WorkExperience />
                <Projectss />
                <Blog />
              </>
            } 
          />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/allposts" element={<AllPosts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
