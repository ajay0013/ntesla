import Home from './pages/Home';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
