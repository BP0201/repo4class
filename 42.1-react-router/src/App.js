import './App.css';

import VendingMachine from './VendingMachine';
import Chips from './Chips'
import Water from './Water'
import Fruit from './Fruit'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<VendingMachine />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/water" element={<Water />} />
          <Route exact path="/fruit" element={<Fruit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
