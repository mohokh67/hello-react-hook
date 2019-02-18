import React, { useState } from 'react';
import TheNavbar from './TheNavbar';

export default function UseStateHook() {
  const [name, setName] = useState('MoHo');

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <TheNavbar />
      <p>Hello {name}</p>
      <input onChange={handleChange} />
    </div>
  )
}