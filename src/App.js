import logo from './logo.svg';
import './App.css';
import FirstPage from './components/firstPage/FirstPage';
import { useState } from 'react';
import SecondPage from './components/secondPage/SecondPage';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  let router=useRoutes(routes)

  return (
  <div className='app'>
    {router}
  </div>
  );
}

export default App;
