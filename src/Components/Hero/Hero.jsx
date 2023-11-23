import React from 'react'
import styles from './Hero.module.css'
import hero from '../../Assets/Hero.png'
import Arrow from '../../Assets/Arrow.png'
import eclips from '../../Assets/Ellipse.png'

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>
      <div className={styles.top}>
        <p>Hello! I Am <span className={styles.name}>Ibrahim Memon</span></p>
        <img src={Arrow} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.bg} />
          <img src={hero} />
        </div>
        <div className={styles.right}>
          <h3>A Designer who</h3>
          <h2>Judges a book</h2>
          <h2>by its <span className={styles.cover}>cover</span>...</h2>
          <p>Because if the cover does not impress you what else can?</p>
          <img src={eclips} />
        </div>
      </div>
    </section>
  )
}
