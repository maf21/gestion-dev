import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    /* Estilos tailwind con mejor rendimiento*/
    <div className='bg-green-500'>
      <Head>
        <title>Home | Gestión de proyectos</title>
      </Head>
      Hello world
      <br/>
      <Link href='/hola'>
        <a>ir a pag. hola <i aria-hidden className="fas fa-home"></i></a>
      </Link>
    </div>
  )
}

export default Home
