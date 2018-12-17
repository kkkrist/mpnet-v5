import React from 'react'
import Link from 'next/link'

const Intro = () => (
  <>
    <div className='center sm-left-align items-center sm-flex'>
      <img
        alt='Christian Mund'
        className='inline-block sm-mr3'
        src='/static/photos/Christian_Mund3.jpg'
        style={{ maxWidth: '150px' }}
      />
      <div>
        <h1 className='h2 mb0'>Christian Mund</h1>
        <h2 className='h3 mt2 sm-mt0'>Full-Stack Web-Entwickler & DevOps-Engineer</h2>
      </div>
    </div>

    <p className='py2'>
      👋 Hallo! Ich bin begeisterter Web-Entwickler mit Schwerpunkt auf das
      Frontend (Design, Performance, Tooling), habe viel Erfahrung in der
      Backend-Entwicklung (Micro-Services, APIs, Datenbanken) und in der
      Administration von heterogenen Server-Infrastrukturen (v.a. Unix). Mein
      Heimathafen heißt ⚓️ <em>Flensburg</em>, zuvor war ich viele Jahre von{' '}
      <em>Hamburg</em> aus tätig. <a href='/ueber/'>Mehr über mich…</a>
    </p>
    <Link href='/kontakt/'>
      <a className='btn btn-primary bg-red plain'>Mit mir arbeiten!</a>
    </Link>
  </>
)

export default Intro
