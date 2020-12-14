import './App.css';
import Authinticate from './Containers/Authinticate';
import { AuthProvider } from './Contexts/AuthContext';


const App = () =>{
  
    return(
      <AuthProvider className="App">
        <Authinticate />
        <Authinticate />
      </AuthProvider>
    );
};

export default App;
