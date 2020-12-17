import './App.css';
import Authinticate from './Containers/Authinticate';
import { AuthProvider } from './Contexts/AuthContext';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


const App = () =>{
  
    return(
      // <Router>
        <AuthProvider className="App">
          {/* <Switch> */}
            {/* <Route path=""></Route> */}
          {/* </Switch> */}
          <Authinticate />
        </AuthProvider>
      // </Router>
    );
};

export default App;
