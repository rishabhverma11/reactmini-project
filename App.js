import React from 'react';
import List from './List.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from'./Home.js'



class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact strict path ="/home" component ={Home}/>
          <Route exact strict path ="/list" component ={List}/>
          
        </div>
       </Router> 
    )
  }
}



export default App;
