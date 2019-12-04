import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


//pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/' component={home}/>
         <Route exact path='/signup' component={signup}/>
         <Route exact path='/login' component={login}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
