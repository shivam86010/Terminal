

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Index from './Pages/index'
import PageNotFound from './Pages/NotFound'
import Games from "./Pages/Games";
import Resume from "./Pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/game" element={<Games />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
