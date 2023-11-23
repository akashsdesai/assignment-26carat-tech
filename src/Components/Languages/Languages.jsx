import React from 'react'
import styles from './Languages.module.css'

export default function Languages(props) {
  return (
    <div className={styles.skill}>
      <img src={require(`../../Assets/${props.imgUrl}`)} />
    </div>
  )
}
