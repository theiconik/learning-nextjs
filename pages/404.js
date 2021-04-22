import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const error404 = () => {

   const router = useRouter();

   useEffect(() => {
       setTimeout(() =>{
          router.push('/');
       },4500)
   },[])

   return ( 
      <div className="not-found">
         <h1>🙄ops...</h1>
         <h2>That page cannot be found</h2>
         <Link href="/"><a className="home-btn">← Home</a></Link>
      </div>
    );
}
 
export default error404;