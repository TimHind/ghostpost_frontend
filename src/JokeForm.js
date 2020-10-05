import React, { Component } from 'react';
import axios from 'axios';

class JokeForm extends Component {
      constructor(props) {
        super(props);
        this.state = {
          body: '',
          joke_type: '',
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { body, joke_type } = this.state;

        axios.post('http://localhost:8000/api/joke/', { body, joke_type })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/retrieve"
              });
      }

      render() {
        const { body, joke_type} = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="What's on your mind?"
              name="body"
              value={body}
              onChange={this.onChange}
            />
            <input
              type="text"
              placeholder="Boast or Roast?"
              name="joke_type"
              value={joke_type}
              onChange={this.onChange}
            /> 
            <button type="submit" value="Submit">Submit</button>
          </form>
        );
      }
    }
    export default JokeForm;