import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/layout/NavBar';

import Home from './components/pages/Home';
import Historia from './components/pages/Historia';
import Contato from './components/pages/Contato';
import TrabalheConosco from './components/pages/TrabalheConosco';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/historia' element={<Historia />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/trabalheConosco' element={<TrabalheConosco />} />
      </Routes>

    </Router>
  );
}

export default App;
