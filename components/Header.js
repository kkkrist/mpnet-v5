import React from 'react'
import Link from 'next/link'
import Navigation from './Navigation'

const Header = () => (
  <header className='mb4 center sm-flex items-center justify-between'>
    <Link href='/'>
      <a className='black text-decoration-none plain inline-block center'>
        <div className='flex items-center'>
          <span
            className='h1'
            title='MUNDPROPAGANDA.net'
            style={{ fontWeight: 500 }}
          >
            &#x7B;M/<span className='red'>P</span>&#x7D;
          </span>
          <div className='ml2 xs-hide h4'>
            MUND<span className='red'>PROPAGANDA</span>.net
          </div>
        </div>
      </a>
    </Link>
    <Navigation />
  </header>
)

export default Header
