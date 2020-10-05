import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class UpVote  extends Component {
    constructor(props){
      super(props);
      this.state = {
        boasts: [{body: "heyugly", joke_type: 'Roast', upvote: 5, downvote: 2}],
      };
    }
  
    IncrementItem = (prevState) => {
        this.setState({ upvote: prevState.upvote + 1 });
      }
  
    render(){
      return (
        <div className="joke">
        
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
    
        </div>
      );
  
    }
  }
  
  export default UpVote;