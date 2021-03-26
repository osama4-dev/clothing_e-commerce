import React from 'react'
import './App.css';
import {Swtich,Route, Switch} from 'react-router-dom'

import HomePage from '../src/pages/homepage/homepage.component.jsx'

const HatsPage = () =>(
  <div>
  <h1>Hats page</h1>
  </div>
)
// exact in  Route component means it should  be / only to route it to that page or else it wont
//for example if its localhost:3000/hats tahat is localhost:3000/ is there to Homepage will be shown as its true exact is either true or false which is boolean so giving no value
//also means its true without exact the route pages will be shown on one page

//what switch does basically is it will go through the first route if there is no exact it will only route or show the first component OF Route
//in not using exact before using switch both Route components were shown on the same page but switch will make now only the first route compoennt to be shown if no exact used 
//even if we give '/hats' it will show only '/' page

function App() {
  return (
    <div >
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route   path='/hats' component={HatsPage}/>
    </Switch>
     
    </div>
  );
}

export default App;
