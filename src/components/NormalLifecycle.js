import React, {Component} from 'react';
import axios from 'axios';
import TheNavbar from './TheNavbar';

export default class NormalLifecycle extends Component {
  state = {
    username: ''
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/1`)
      .then(res => {
        const username = res.data.name;
        this.setState({ username });
      })
  }

  render() {
    return (
      <div>
        <TheNavbar />
        <p>User name: <span>{this.state.username}</span></p>
      </div>
    )
  }
}