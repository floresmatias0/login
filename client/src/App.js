import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Intro from './pages/Intro/Intro'
import Register from './components/Register/Register'

function App() {
  return (
      <>
        <Navbar/>
        <Route exact path="/" component={Intro} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </> 
  );
}

export default App;
