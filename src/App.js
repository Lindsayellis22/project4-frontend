import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Home from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Home.js';
import CreatePet from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/CreatePet.js'
import AdoptedPets from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/AdoptedPets.js'
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/species/:id' element={<CreatePet />} />
          <Route path='/pets' element={<AdoptedPets />} />
        </Routes>
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  padding: 24px 100px;
  @media (max-width: 768px) {
    padding: 24px;
  }
`

export default App;

