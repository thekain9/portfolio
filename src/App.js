// Import necessary styles and React Router components.
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import React components for different pages and custom components.
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import CV from './Pages/CV';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Skills from './Pages/Skills';
import ProjectDisplay from './Pages/ProjectDisplay';
// Define the main App component.
function App() {
  return (
    // Create a div element with a class name "App" for styling.
    <div className="App">
      {/* Set up a BrowserRouter for handling client-side routing. */}
      <Router>
        {/* Include the Navbar component for navigation. */}
        <Navbar />
        
        {/* Define routes for different pages using the 'Routes' and 'Route' components. */}
        <Routes>
          {/* Define a route for the Home page and render the 'Home' component. */}
          <Route path="/" element={<Home />} />
          
          {/* Define a route for the Projects page and render the 'Projects' component. */}
          <Route path="/Projects" element={<Projects />} />
          
          {/* Define a route for the CV page and render the 'CV' component. */}
          <Route path="/CV" element={<CV />} />

          <Route path='/Projects/:id' element={<ProjectDisplay />} />
          
          {/* Define a route for the Skills page and render the 'Skills' component. */}
          <Route path="/Skills" element={<Skills />} />
        </Routes>
        
        {/* Include the Footer component at the bottom of the app. */}
        <Footer />
      </Router>
    </div>
  );
}

// Export the App component to make it available for use in other parts of the application.
export default App;

