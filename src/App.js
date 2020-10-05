import React from 'react';
import Home from "./Home";
import BoastView from './BoastView';
import RoastView from './RoastView';
import SortedView from './SortedView';
import JokeForm from './JokeForm'
//import logo from './logo.svg';
import { Route, NavLink, HashRouter } from "react-router-dom"
import './App.css';

class App extends React.Component {
  render(){
    return (
      <HashRouter>
      <div>
          <h1>GhostPost</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/boasts">Boasts</NavLink></li>
            <li><NavLink to="/roasts">Roasts</NavLink></li>
            <li><NavLink to="/sorted">Sort</NavLink></li>
            <li><NavLink to="/create">Create a Joke!</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/boasts" component={BoastView}/>
            <Route path="/roasts" component={RoastView}/>
            <Route path="/sorted" component={SortedView}/>
            <Route path="/create" component={JokeForm}/>
          </div>
      </div>
      </HashRouter>
      
      
    );

  }
}

export default App;

