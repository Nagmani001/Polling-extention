import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Join from './pages/join';
import Create from './pages/create';
const App = () => {
  return <div>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/join" element={<Join />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  </div>
};

export default App;
