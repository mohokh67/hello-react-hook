import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TheNavbar from './TheNavbar';

export default function UseEffectHook() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    //componentDidMount
    //componentDidUpdate
    console.log('mounted')
    axios.get(`https://jsonplaceholder.typicode.com/users/1`)
      .then(res => {
        const name = res.data.name;
        setUsername(name);
      })

    // componentWillUnmount
    // Unsubscribe
    return() => console.log('unmounted')

  }, [username]);

  return (
    <div>
      <TheNavbar />
      <p>User name: <span>{username}</span></p>
    </div>
  )
}