import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbooks from './components/Addbooks';
import Search from './components/Search';
import Head from './components/Head';
import Viewbook from './components/Viewbook';

function App() {
  return (<div>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addbooks/>}/>
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/view" exact element={<Viewbook/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
