import Link from 'next/link'
import React from 'react'

const hola = () => {
  return (
    <div>
        hola
        <Link href='/'>
        <a>ir a pag. home</a>
        </Link>
    </div>
  )
}

export default hola