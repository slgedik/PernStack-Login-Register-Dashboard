import React, { Fragment, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Link } from 'react-router-dom';

//components
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import MusteriKayit from './components/MusteriKayit';
import Home from './components/Home';
import ClientLogin from './components/ClientLogin';
import ClientDashboard from './components/ClientDashboard';
import Navi from './components/Navi';
import HomePage from './components/HomePage';
import HomeImage from './components/HomeImage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cliReg, setCliReg] = useState(false);
  const [cliAuth, setCliAuth] = useState(false);

  const newReg = (boolean) => {
    setCliReg(boolean);
    console.log(`reg is ${cliReg}`);
  };
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
    console.log(`auth is ${isAuthenticated}`);
  };

  const setCli = (boolean) => {
    setCliAuth(boolean);
    console.log(`CliAuth is ${cliAuth}`);
  };

  return (
    <body>
      <Router>
        <Routes>
          <Route
            path='/home'
            element={
              <>
                <HomeImage />
                <div className='App'>
                  <Navi setAuth={setAuth} setCli={setCli} />
                </div>
                <div>
                  <HomePage />
                </div>
              </>
            }
          />

          <Route exact path='/' element={<Navigate to='/home' />} />

          <Route
            exact
            path='/login'
            element={
              !isAuthenticated ? (
                <Login setAuth={setAuth} setCli={setCli} />
              ) : (
                <Navigate to='/dashboard' />
              )
            }
          />

          <Route
            path='/client-login'
            element={
              !cliAuth ? (
                <ClientLogin setCli={setCli} />
              ) : (
                <Navigate to='/dashboard/cli' />
              )
            }
          />

          <Route
            exact
            path='/register'
            element={
              !isAuthenticated ? (
                <Register setAuth={setAuth} />
              ) : (
                <Navigate to='/login' />
              )
            }
          />

          <Route
            path='/musteriKayit'
            element={
              cliReg && isAuthenticated ? (
                <MusteriKayit newReg={newReg} setAuth={setAuth} />
              ) : (
                <Navigate to='/dashboard' />
              )
            }
          />

          <Route
            path='/dashboard'
            element={
              isAuthenticated ? (
                <Dashboard setAuth={setAuth} newReg={newReg} />
              ) : (
                <Navigate to='/client-login' />
              )
            }
          />

          <Route
            path='/dashboard/cli'
            element={
              cliAuth ? (
                <ClientDashboard setCli={setCli} />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
