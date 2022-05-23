import './App.css';
import NFTview from './pages/NFTview';
import NFTadd from './pages/NFTadd/NFTadd';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NFTview />} />
        <Route path="/add" element={<NFTadd />} />
      </Routes>
    </>
  );
}

export default App;
