import React from 'react'
import Link from 'next/link'
import entries from '../data/menu-top.json'

const Navigation = () => (
  <nav>
    <ul className='mb0 mt3 sm-mt0 sm-ml3 inline-block list-reset'>
      {entries.map((entry, index) => (
        <li key={index} className='inline-block'>
          <Link href={entry.url} prefetch>
            <a className='mx2 italic h4'>{entry.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
