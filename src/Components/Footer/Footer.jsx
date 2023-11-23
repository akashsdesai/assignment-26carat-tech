import React from 'react'
import styles from './Footer.module.css'
import insta from '../../Assets/insta.png'
import git from '../../Assets/git.png'
import google from '../../Assets/google.png'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p className={styles.contact}>
        Contact
      </p>
      <div className={styles.bottom}>
        <p>
          I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. or have a project in mind? Let's connect.
        </p>
        <p className={styles.email}>
          <a target='_blank' href='mailto:example@gmail.com'>ibrhaimmemon930@gmail.com</a>
        </p>
      </div>
      <ul className={styles.links}>
        <li><a target='_blank' href='https://www.instagram.com'><img src={insta} /></a></li>
        <li><a target='_balnk' href='https://www.github.com'><img src={git} /></a></li>
        <li><a target='_blank' href='https://www.google.co.in'><img src={google} /></a></li>
      </ul>
    </section>
  )
}
