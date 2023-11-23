import React from 'react'
import styles from './Card.module.css'
export default function Card(props) {

  return (
    <div className={`${!props.bg ? styles.card1:styles.card2} `}>
      <div className={styles.left}>
        <img src={require(`../../Assets/${props.imgs}`)}/>
      </div>
      <div className={styles.right}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.desc}>{props.desc}</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}
