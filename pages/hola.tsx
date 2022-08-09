import Link from 'next/link'
import React from 'react'

const hola = () => {
  return (
    <div className='bg-slate-400'>
        hola
        <br/>
        <Link href='/'>
        <a>
          ir a pag. home <i className='fas fa-home'></i>
        </a>
        </Link>
    </div>
  )
}

export default hola