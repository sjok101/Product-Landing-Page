
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WindowDimensionsLogger from './components/WindowDimensionLogger';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <WindowDimensionsLogger/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
