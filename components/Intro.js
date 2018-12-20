import React, { PureComponent } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Intro extends PureComponent {
  img = React.createRef()

  componentDidMount () {
    this.img.current.src = '/static/photos/Christian_Mund3.jpg'
  }

  render () {
    return (
      <div>
        <Head>
          <link rel='image' href='/static/photos/Christian_Mund3.jpg' />
        </Head>
        <div className='center sm-left-align items-center sm-flex'>
          <img
            alt='Christian Mund'
            className='inline-block sm-mr3 is-loading'
            onLoad={({ target }) => target.classList.remove('is-loading')}
            ref={this.img}
            src={`data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1024" height="1024"><rect x="0" y="0" width="1024" height="1024" fill="transparent"/><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%23000000" fill-opacity="0.501961" points="125,155 271,255 -16,255"/><polygon fill="%23ffffff" fill-opacity="0.501961" points="134,164 250,-16 271,246"/><polygon fill="%23000000" fill-opacity="0.501961" points="64,54 190,47 112,-1"/><polygon fill="%23ffffff" fill-opacity="0.501961" points="96,-14 -1,260 -16,-2"/><polygon fill="%23000000" fill-opacity="0.501961" points="-16,252 199,202 271,271"/><polygon fill="%23ffffff" fill-opacity="0.501961" points="256,269 154,-15 271,-12"/><polygon fill="%23cb774c" fill-opacity="0.501961" points="195,47 53,56 109,271"/><polygon fill="%23ffffff" fill-opacity="0.501961" points="14,-16 -16,237 88,187"/><polygon fill="%23ffd1a4" fill-opacity="0.501961" points="153,214 87,232 164,61"/><polygon fill="%23000000" fill-opacity="0.501961" points="59,271 101,180 8,231"/><polygon fill="%23000000" fill-opacity="0.501961" points="174,109 179,42 145,11"/><polygon fill="%23512b18" fill-opacity="0.501961" points="60,111 81,19 104,211"/></g></svg>`}
            style={{ maxWidth: '150px' }}
          />
          <div>
            <h1 className='h2 mb0'>Christian Mund</h1>
            <h2 className='h3 mt2 sm-mt0'>
              Full-Stack Web-Entwickler & DevOps-Engineer
            </h2>
          </div>
          <style jsx>{`
            img {
              transition: all 0.25s ease-out;
            }
            img.is-loading {
              filter: blur(5px);
            }
          `}</style>
        </div>

        <p className='py2'>
          👋 Hallo! Ich bin begeisterter Web-Entwickler mit Schwerpunkt auf das
          Frontend (Design, Performance, Tooling), habe viel Erfahrung in der
          Backend-Entwicklung (Micro-Services, APIs, Datenbanken) und in der
          Administration von heterogenen Server-Infrastrukturen (v.a. Unix).
          Mein Heimathafen heißt ⚓️ <em>Flensburg</em>, zuvor war ich viele
          Jahre von <em>Hamburg</em> aus tätig.{' '}
          <a href='/ueber/'>Mehr über mich…</a>
        </p>
        <Link href='/kontakt/'>
          <a className='btn btn-primary bg-red plain'>Mit mir arbeiten!</a>
        </Link>
      </div>
    )
  }
}
