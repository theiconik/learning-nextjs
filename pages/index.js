import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="">
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolores, quidem minima dicta facilis possimus ipsam suscipit reprehenderit, ab maxime culpa blanditiis qui deleniti eveniet architecto labore incidunt est voluptas!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quo pariatur tempore vitae cumque nam vero, deserunt odio rerum enim excepturi sequi adipisci et id exercitationem ducimus molestiae illo eaque.</p>
      <Link href="/nextjs"><a className={styles.btn}>Next →</a></Link>
    </div>
  )
}
