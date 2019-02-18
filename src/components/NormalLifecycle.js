import React, {Component} from 'react';
import axios from 'axios';
import TheNavbar from './TheNavbar';

export default class NormalLifecycle extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const people = res.data;
        this.setState({ people });
      })
  }

  render() {
    return (
      <div>
        <TheNavbar />
        <ul>
          { this.state.people.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
      </div>

    )
  }
}