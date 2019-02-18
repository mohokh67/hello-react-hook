import React from 'react'
import { Link } from 'react-router-dom'

export default function TheNavbar() {
  return (
    <div>
      <Link to="/normal-state">Normal State</Link>&nbsp;|&nbsp;
      <Link to="/usestate-hook">useState Hook</Link>&nbsp;|&nbsp;
      <Link to="/normal-lifecyle">Normal lifecyle</Link>&nbsp;|&nbsp;
      <Link to="/useeffect-hook">useEffect Hook</Link>
    </div>
  )
}
