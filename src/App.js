import './App.css';
import { Routes,Route } from 'react-router-dom';
import UserFeed from './pages/UserFeed/UserFeed';
import SinglePostView from './pages/SinglePostView/SinglePostView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/" element={<UserFeed />}/>
        <Route path="/pages/SinglePostView/" element={<SinglePostView />}/>
      </Routes>
    </div>
  );
}

export default App;
