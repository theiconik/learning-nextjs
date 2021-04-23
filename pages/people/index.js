import styles from '../../styles/people.module.css'

export const getStaticProps = async () => {
  const res = await (await fetch("https://jsonplaceholder.typicode.com/users"));
  const data = await res.json();

  return {
    props: { peoples: data }
  }
}

import Head from "next/head";

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
          <div key={people.id}>
          <a className={styles.single}>{ people.name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default nextRoot;