import logo from './logo.svg';
import './App.css';
import Auth from './Containers/Auth'
import Signin from './Components/Signin'
import Register from './Components/Register'
import Dashboard from './Containers/Dashboard'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <Auth />
        </Route>
    </Switch>
  </Router>
  );
}

export default App;
