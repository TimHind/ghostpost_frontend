import React from 'react';


class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        jokes: [{body: "hey", joke_type: 'Roast', upvote: 5, downvote: 2}],
      };
    }
  
    componentDidMount(){
      fetch("http://localhost:8000/api/joke")
      .then((res) => res.json())
      .then((data) => this.setState({jokes: data}));
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
        fetch("http://localhost:8000/api/joke/" + id + "/process_downvote/",
        {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then((res) => res.json())
        .then((data) => this.forceUpdate(this.componentDidMount));
      }


    render(){
      return (
        <div className="content">
          <ul>
          {this.state.jokes.map((p) => (
          <pre><li>{p.body}, {p.joke_type}, {p.total_likes}, {p.time} <button onClick={e => this.IncrementItem(p.id)}>UpVote</button> <button onClick={e => this.DecrementItem(p.id)}>Downvote</button></li></pre>
          ))}
          </ul>
          </div>
      );
  
    }
  }
  
  export default Home;