import React from 'react'
import styles from './About.module.css'
import facebook from '../../Assets/facebook.png'


export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.top} >
        <p className={styles.title}>I'm a Software Engineer.| </p>
        <p className={styles.sub}>Currently, I'm a Software Engineer at <span className={styles.facebook}> <img src={facebook} /> Facebook</span></p>
      </div>
      <div className={styles.bottom}>
        <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.</p>
      </div>
    </section>
  )
}
