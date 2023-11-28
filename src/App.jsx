import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './views/About';
import { Home } from './views/Home';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre/:id" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
