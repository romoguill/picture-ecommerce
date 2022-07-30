import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

import './styles.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home Page</h1>

      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
