import React from 'react'
import styles from './Type1.module.css'
import link from '../../../Assets/link.png'

export default function Type1(props) {
  return (
    <div className={styles.project}>
      <div className={styles.left}>
        <p className={styles.heading}>Featured  Project</p>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.desc}>
          <p>{props.desc}</p>
        </div>
        <div className={styles.link}>
          <a target='_blank' href={props.demo}><img src={link} />  </a>
          <a target='_blank' href={props.repo}><img src={link} /> </a> 
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.bg1} />
        <div className={styles.bg2} />
        <img src={require(`../../../Assets/${props.imgUrl}`)} />
      </div>
    </div>
  )
}