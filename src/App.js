import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router'
import {infoDivDecider, religiousInfo,article} from './Redux/actions'
import {connect} from 'react-redux'
import './App.css';
import Header from './Components/Header'
import InfoContainer from './Components/InfoContainer'
import Login from './Components/Login'
import Admin from './Components/admin'

function App(props) {
  useEffect(() =>{
    fetch("http://localhost:3000/")
  .then(r => r.json())
  .then(data => {
    props.religiousInfo(data)
  })
  fetch("http://localhost:3000/article")
  .then(r => r.json())
  .then(data => {
    props.article(data)
  })
  })
  
  



  let handleRendering = (routerProps) => {
    let religionName = routerProps.match.params.religion

    props.infoDivDecider(religionName)
    
    
    return (
      <div>
    <InfoContainer />
    </div>)
  }

  return (
    <div className="App">
        <Header/> 
          <Switch>
          <Route path="/admin" component={Admin} /> 
          <Route path="/login" component={Login} />   
            <Route path="/:religion" render={ handleRendering } />      
          </Switch>
          
    </div>
  );
}

export default connect(null,{infoDivDecider,religiousInfo,article})(App);
