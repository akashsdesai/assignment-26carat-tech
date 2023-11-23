import React from 'react'
import styles from './Skills.module.css'
import skills from '../../Assets/skills.json'
import Languages from '../Languages/Languages'
import globe from '../../Assets/globe2.png'
export default function Skills() {
  return (
    <section className={styles.main}>
      <div className={styles.head}>
        <p>
          I'm currently looking to join a <span className={styles.clr}>cross-functional</span> team <span className={styles.small}>that values improving people's lives through accessible design</span>
        </p>
      </div>
      <div className={styles.skills}>
        {
          skills.map(item=>{
            return(
              <Languages
                key={item.id}
                imgUrl={item.imgUrl}
              />
            )
          })
        }
      </div>
      <div className={styles.globe}>
        <img src={globe} />

      </div>
    </section>
  )
}
