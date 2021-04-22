import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
   return ( 
      <nav>
         <div className="logo">
            <Image src="/nextjs.png" width={200} height={75}/>
            {/* <h1>Learning Next.js</h1> */}
         </div>
         <Link href="/"><a>Home</a></Link>
         <Link href="/about"><a>About</a></Link>
         <Link href="/nextjs"><a>Topics</a></Link>
      </nav>
    );
}
 
export default Navbar;