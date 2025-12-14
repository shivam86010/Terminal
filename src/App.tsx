

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Index from './Pages/index'
import PageNotFound from './Pages/NotFound'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
