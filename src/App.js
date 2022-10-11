import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Landing />
          }
        />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path={"/#contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
