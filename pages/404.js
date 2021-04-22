import Link from 'next/link'

const error404 = () => {
   return ( 
      <div className="not-found">
         <h1>🙄ops...</h1>
         <h2>That page cannot be found</h2>
         <Link href="/"><a className="home-btn">← Home</a></Link>
      </div>
    );
}
 
export default error404;