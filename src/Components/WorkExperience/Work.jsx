import Experience from '../../Assets/Experience.json'
import styles from './Work.module.css'
import Card from '../card/Card'
export default function () {
  return (
    <section id='about' className={styles.work}>
      
      <div className={styles.top}>
      
        <p>Work Experience</p>
      </div>  
      <div className={styles.bottom}>
      <div className={styles.bg} />
        {
          Experience.map((item)=>{
            return(
                <Card 
                  key={item.id}
                  id={item.id}
                  bg={item.bg}
                  imgs={item.imgs}
                  title={item.title}
                  desc={item.description}
                />
            )
          })
        }
      </div>
    </section>
  )
}
