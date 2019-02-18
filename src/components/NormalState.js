import React, { Component } from 'react'
import TheNavbar from './TheNavbar';

export default class NormalState extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'MoHo'
    }
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <TheNavbar />
        <p>Hello {this.state.name}</p>
        <input onChange={this.handleChange} />
      </div>
    )
  }
}


