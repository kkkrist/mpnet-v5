import React from 'react'
import Link from 'next/link'
import entries from '../data/menu-footer.json'
import { version } from '../package.json'

const Footer = () => (
  <footer className='mt4 pt4'>
    <ul className='h4 m0 list-reset mx-auto center'>
      <li className='h6 inline black'>
        &copy; {new Date().getFullYear()} MUND
        <span className='red'>PROPAGANDA</span>.net ‖ Christian Mund v{version}{' '}
        (
        <a href='https://github.com/kkkrist/mpnet-v5' rel='noopener'>
          GitHub
        </a>
        )
      </li>
      {entries.map((entry, index) => (
        <li key={index} className='h6 inline-block black'>
          <Link href={entry.url}>
            <a>{entry.text}</a>
          </Link>
        </li>
      ))}
      <style jsx>{`
        li:not(:last-child):after {
          margin-right: 0.5rem;
        }
        li:not(:first-child):after {
          content: ',';
        }
        li:not(:last-child):after {
          content: ',';
        }
        li:first-child:after,
        li:last-child:after {
          content: '.';
        }
      `}</style>
    </ul>
  </footer>
)

export default Footer
