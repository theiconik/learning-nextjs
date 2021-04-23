import styles from '../../styles/people.module.css'
import Head from "next/head"
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await res.json();

  return {
    props: { peoples: data }
  }
}

const nextRoot = ({peoples}) => {
  return (
    <>
      <Head>
        <title>Learning Next.js | People</title>
        <meta name="keywords" content="Next.js"/>
      </Head>
      <div>
        <h1>People</h1>
        {peoples.map(people => (
          <Link href={"/people/" + people.id} key={people.id}>
          <a className={styles.single}>{people.name}</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default nextRoot;
