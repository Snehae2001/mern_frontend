import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import { useState, useEffect } from 'react';


function App() {

  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('http://localhost:3001/auth',
        {
          method: 'GET',
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          credentials: "include"

        });
      if (res.status === 200) {
        setAuth(true)
        setAuth(false)
      }
      if (res.status === 201) {
        setAuth(false)
        setAuth(true)
      }
    }
    catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    isLoggedIn();

  }, []);
  return (
    <>
      <Navbar auth={auth1} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Protectedroute exact path="/login" component={Login} auth={auth1} />
        <Route exact path="/register" component={Register} auth={auth1} />
        <Route exact path="/logout" component={Logout} auth={auth} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
