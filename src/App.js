import {useState, useEffect} from 'react';
import fireauth from "./firebase"
import './App.css';
import Auth from './Containers/Auth'
import Authinticate from './Containers/Authinticate'
// import Signin from './Components/Signin'
// import Register from './Components/Register'
import Dashboard from './Containers/Dashboard'

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () =>{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({})
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const handleLogin = () =>{
    try {
      fireauth
      .auth()
      .signInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrors({err:error});
      throw error;
    }
  }

  const handleSignUp = () =>{
    try {
      fireauth
      .auth()
      .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setErrors({err:error});
      throw error;
    }
  }

  const handleLogout = () =>{
    fireauth.auth().signOut()
  }

  const authListener = () =>{
    fireauth.auth().onAuthStateChanged(user=>user ? setUser(user) : setUser(''));
  }

  useEffect(()=>authListener(),[])
    return(
      <div className="App">
        <Authinticate 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLoggedin={isLoggedin}
          setIsLoggedIn={setIsLoggedIn}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </div>
    );
};

export default App;
