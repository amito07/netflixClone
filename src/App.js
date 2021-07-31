import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import HomeScreen from './Homepage/Homepage';
import FrontPage from './inititalPage/FrontPage'
import Signup from './inititalPage/Signup';
import Registration from './Registration/Registration';
import Profile from './Profile/Profile'



function App() {
  return (
    <Router>
        <Route path='/profile' component={Profile}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/registration' component={Registration}/>
        <Route exact path='/' component={FrontPage}/>
        <Route path='/home' component={HomeScreen}/>
    </Router>

  );
}

export default App;
