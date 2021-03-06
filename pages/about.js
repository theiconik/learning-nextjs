import styles from '../styles/About.module.css'
import Head from 'next/head'

const About = () => {
   return ( 
      <>
      <Head>
        <title>Learning Next.js | About</title>
        <meta name="keywords" content="Next.js"/>
      </Head>
      <div>
         <h1 className={styles.title}>About</h1>
         <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ipsam delectus repudiandae voluptates sit recusandae beatae, aliquam rerum blanditiis totam maiores, laudantium laborum aliquid error ut assumenda, eum odit quae.</p>
         <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum quam totam accusamus dolor eum reprehenderit doloremque.</p>
      </div>
      </>
    );
}
 
export default About;