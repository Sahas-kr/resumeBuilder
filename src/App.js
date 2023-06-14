import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import CreateResume from './components/createresume/CreateResume';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Create-Resume' element={<CreateResume />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
