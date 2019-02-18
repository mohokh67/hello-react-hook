import React, { useState } from 'react'
import TheNavbar from './TheNavbar';

export default function UseStateHook () {

  const [name, changeName] = useState('MoHo');

  function handleChange(e) {
    changeName(e.target.value)
  }

  return (
    <div>
      <TheNavbar />
      <p>My name is {name}</p>
      <input onChange={handleChange} />
    </div>
  )

}
