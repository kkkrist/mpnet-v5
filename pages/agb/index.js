import React from 'react'
import Head from 'next/head'
import { name } from '../../package.json'

export default () => (
  <article className='pullup content'>
    <Head>
      <meta name='Description' content='Allgemeine Geschäftsbedingungen für MUNDPROPAGANDA.net' />
      <title>AGB & Quellenangaben ‖ {name}</title>
    </Head>
    <h1>AGB & Quellenangaben</h1>
    <h2>Allgemeine Geschäftsbedingungen (AGB):</h2>
    <ul>
      <li>
        <a href='/static/docs/AV_BITKOM_20140604.pdf'>
          Allgemeine Vertragsbedingungen
        </a>
      </li>
      <li>
        <a href='/static/docs/DL_BITKOM_20140604.pdf'>
          Vertragsbedingungen für Dienstleistungen
        </a>
      </li>
    </ul>
    <h2>Quellenangaben für verwendete Bilder und Grafiken:</h2>
    <ul>
      <li>
        <a href='https://www.w3.org/html/logo/'>HTML5-Logo</a> by{' '}
        <a href='https://www.w3.org'>W3C</a> (<a href='https://creativecommons.org/licenses/by/3.0/deed'>
          CC BY 3.0
        </a>)
      </li>
      <li>
        CSS3-Logo (c) by <a href='http://mohldesign.hr/'>Mohl Design</a>
      </li>
      <li>
        <a href='https://github.com/voodootikigod/logo.js'>JS-Logo</a> by{' '}
        <a href='https://github.com/voodootikigod'>Chris Williams</a>
      </li>
      <li>
        <a href='https://nodejs.org/en/about/resources/'>Node.js-Logo</a> (c) by{' '}
        <a href='https://nodejs.org'>Node.js Foundation</a>
      </li>
      <li>
        <a href='http://php.net/download-logos.php'>PHP-Logo</a> (c) by{' '}
        <a href='http://php.net'>The PHP Group</a>
      </li>
      <li>
        Linecons Database icon by{' '}
        <a href='http://www.designmodo.com/'>Designmodo</a> (<a href='https://creativecommons.org/licenses/by/3.0/deed'>
          CC BY 3.0
        </a>)
      </li>
      <li>
        Server Cloud icon by{' '}
        <a href='http://www.flaticon.com/'>www.flaticon.com</a>/<a href='http://www.freepik.com/'>
          Freepik
        </a>
      </li>
      <li>
        Repair Tools icon by{' '}
        <a href='http://www.flaticon.com/'>www.flaticon.com</a>/<a href='http://www.freepik.com/'>
          Freepik
        </a>
      </li>
    </ul>
  </article>
)
