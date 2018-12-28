import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from './Image'

const Placeholder = props => (
  <svg {...props}>
    <filter id='blur'>
      <feGaussianBlur stdDeviation='10' />
    </filter>
    <path fill='#fff' d='M0 0h150v150H0z' />
    <g fillOpacity={0.502} filter='url(#blur)'>
      <path d='M-9.082 149.121l168.164 1.758-85.547-60.352z' />
      <path
        fill='#fff'
        d='M159.082 152.637L145.606-9.082 84.082 89.356zM-9.082 139.16l59.18-27.539-37.5-120.703z'
      />
      <path d='M68.262-1.465l42.187 31.64-70.898-1.757z' />
      <path
        fill='#fff'
        d='M54.785-6.738L-6.152.879l3.515 158.203zM159.082 82.324L51.856 137.402 133.3-9.082z'
      />
      <path d='M159.082 159.082l-39.258-38.672-128.906 26.953z' />
      <path fill='#c16b3f' d='M31.348 29.004h80.273L64.746 159.082z' />
      <path fill='#fff' d='M90.527-9.082h68.555l-8.203 168.164z' />
      <path d='M105.762 26.074l-2.93 39.844L85.254 6.152zM60.645 104.59l-25.782 54.492L3.81 136.817z' />
      <path fill='#fff' d='M-9.082 135.645L31.934-9.082l11.718 124.219z' />
    </g>
  </svg>
)

Placeholder.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default () => (
  <div>
    <Head>
      <link rel='image' href='/static/photos/Christian_Mund3.jpg' />
    </Head>
    <div className='center sm-left-align items-center sm-flex'>
      <Image
        alt='Christian Mund'
        height={150}
        placeholder={Placeholder}
        src='/static/photos/Christian_Mund3.png'
        width={150}
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
      Administration von heterogenen Server-Infrastrukturen (v.a. Unix). Mein
      Heimathafen heißt ⚓️ <em>Flensburg</em>, zuvor war ich viele Jahre von{' '}
      <em>Hamburg</em> aus tätig. <a href='/ueber/'>Mehr über mich…</a>
    </p>
    <Link href='/kontakt/'>
      <a className='btn btn-primary bg-red plain'>Mit mir arbeiten!</a>
    </Link>
  </div>
)
