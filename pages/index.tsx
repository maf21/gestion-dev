import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    /* Estilos tailwind con mejor rendimiento*/
    <div className='bg-green-500'>
      Hello world
      <br></br>
      <Link href='/hola'>
        <a>ir a pag. hola</a>
        </Link>
    </div>
  )
}

export default Home
