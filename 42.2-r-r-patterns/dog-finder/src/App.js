import './App.css';

import Home from './Home'
import Dog from './Dog'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/dogs" element={<Home />} />
          <Route exact path="/dogs/:name" element={<Dog />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
