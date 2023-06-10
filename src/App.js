import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import UserFeed from './pages/UserFeed/UserFeed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/" element={<UserFeed />}/>
      </Routes>
    </div>
  );
}

export default App;
