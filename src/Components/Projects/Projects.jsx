import React from 'react'
import styles from './Projects.module.css'

import projects from '../../Assets/Proects.json'
import Type1 from './Type1/Type1'
import Type2 from './Type2/Type2'

export default function Projects() {
  return (
    <section id='lab' className={styles.project}>
      {
        projects.map(item=>{
          const check=item.id%2
          return(
            check ? 
            <Type1 
              title={item.title}
              desc={item.description}
              imgUrl={item.imgUrl}
              demo={item.demo}
              repo={item.repo}
            /> 
            : 
            <Type2
              title={item.title}
              desc={item.description}
              imgUrl={item.imgUrl}
              demo={item.demo}
              repo={item.repo}
            />
          )
        })
      }
    </section>
  )
}
