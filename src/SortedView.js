import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class SortedView  extends Component {
    constructor(props){
      super(props);
      this.state = {
        sorted: [{body: "heyugly", joke_type: 'Roast', upvote: 5, downvote: 2}],
      };
    }
  
    componentDidMount(){
      fetch("http://localhost:8000/api/joke/sorted_jokes/")
      .then((res) => res.json())
      .then((data) => this.setState({sorted: data}));
    }

    IncrementItem = (id) => {
        const data = {body: "kh", joke_type: "Roast"}
        fetch("http://localhost:8000/api/joke/" + id + "/process_vote/",
        {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then((res) => res.json())
        .then((data) => this.forceUpdate(this.componentDidMount));
      }

    DecrementItem = (id) => {
        const data = {body: "kh", joke_type: "Roast"}
        fetch(`http://localhost:8000/api/joke/${id}/process_downvote/`,
        {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then((res) => res.json())
        .then((data) => this.forceUpdate(this.componentDidMount));
      }
  
    render(){
      return (
        <div className="joke">
        <h1>Sorted by Likes</h1>
    
        <div class='card-body'>
            {this.state.sorted.map((c) => (
             <pre><li>{c.body}, {c.joke_type}, {c.total_likes}, {c.time} <button onClick={e => this.IncrementItem(c.id)}>UpVote</button> <button onClick={e => this.DecrementItem(c.id)}>Downvote</button>
             </li></pre>
  
          ))}
          </div>
          
      
        </div>
      );
  
    }
  }
  
  export default SortedView;