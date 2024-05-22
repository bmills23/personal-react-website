import './App.css';
import Blog from './pages/Blog';
import About from './pages/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
