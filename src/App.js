
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import Profile from './components/Profile/Profile';
function App() {
  return (
    <HashRouter>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route exact path="/profile" render={() => <Profile />} />
    </HashRouter>
  );
}

export default App;
