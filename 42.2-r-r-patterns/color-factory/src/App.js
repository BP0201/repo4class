import './App.css';

import ColorsHome from './ColorsHome';
import NotFound from './NotFound'
import Color from './Color';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/colors" element={<ColorsHome />} />
          <Route exact path='/colors/:color' element={<Color />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
