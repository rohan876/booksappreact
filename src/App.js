import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbooks from './components/Addbooks';

function App() {
  return (<div>
    <Addbooks/>
    </div>
  );
}

export default App;
