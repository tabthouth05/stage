import React from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import  { Project1, Project2, Project3, Project4 } from './pages/Projects';
import HomeB from './pages/HomeB';

const App = () => {
  return (
  
     <Switch>
       <Route exact path="/" component={HomeB}/>
       <Route exact path="/Project-1" component={Project1}/>
       <Route exact path="/Project-2" component={Project2}/>
       <Route exact path="/Project-3" component={Project3}/>
       <Route exact path="/Project-4" component={Project4}/>
       <Route exact path="/contact" component={Contact}/>
       <Redirect to='/'/> 
     </Switch>
    
  );
};

export default App;