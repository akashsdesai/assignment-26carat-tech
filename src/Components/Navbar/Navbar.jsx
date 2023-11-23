import React from 'react'
import logo from '../../Assets/Logo.png'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav>
      <div className={styles.left}>
      <a href='#home'><img src={logo} /></a>
      </div>
      <div className={styles.right}>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#lab'>Lab</a></li>
        </ul>
      </div>
    </nav>
  )
}
