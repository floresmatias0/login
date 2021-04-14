import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Intro from './pages/Intro/Intro'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import UserState from './context/UserState'

function App() {
  return (
      <UserState>
        <Navbar/>
        <Route exact path="/" component={Intro} />
        <Route path="/home/:userId" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId" component={Profile} />
      </UserState> 
  );
}

export default App;
