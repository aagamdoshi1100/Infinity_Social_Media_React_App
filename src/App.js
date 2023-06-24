import './App.css';
import { Routes,Route } from 'react-router-dom';
import UserFeed from './pages/UserFeed/UserFeed';
import SinglePostView from './pages/SinglePostView/SinglePostView';
import UserProfile from './pages/profile/UserProfile';
import Explore from './pages/explore/Explore';
import BookMark from './pages/bookmark/BookMark';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/" element={<UserFeed />}/>
        <Route path="/pages/SinglePostView/" element={<SinglePostView />}/>
        <Route path="/pages/profile/UserProfile" element={<UserProfile />} />
        <Route path="/pages/explore/Explore" element={<Explore />} />
        <Route path="/pages/bookmark/BookMark" element={<BookMark />} />
      </Routes>
    </div>
  );
}

export default App;
