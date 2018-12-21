import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Image from '../../components/Image'
import { name } from '../../package.json'

const Placeholder = props => (
  <svg {...props}>
    <filter id='blur'>
      <feGaussianBlur stdDeviation='10' />
    </filter>
    <path fill='#807757' d='M0 0h307v410H0z' />
    <g fillOpacity={0.502} filter='url(#blur)'>
      <path d='M-10.41 109.707l-14.414 296.289 305.898 19.219z' />
      <path fill='#ffffbd' d='M301.894 434.824l30.43-459.648L122.52 10.41z' />
      <path fill='#1e2a3e' d='M284.277 265.059l-35.234-174.57-20.82 323.515z' />
      <path fill='#0c140c' d='M4.004 434.824L119.316-15.215-15.214 122.52z' />
      <path fill='#c6a671' d='M209.004 37.637l33.633 317.109L53.652 204.199z' />
      <path d='M-24.824 377.168l203.398 57.656 17.617-171.367z' />
      <path fill='#fff6b5' d='M306.7-18.418l-153.75-6.406 166.562 305.898z' />
      <path fill='#3aa2da' d='M29.629 100.098l81.68-124.922L-24.824 8.809z' />
      <path
        fill='#ffebab'
        d='M250.644 396.387l48.047-253.047 22.422 291.484z'
      />
      <path fill='#5a5129' d='M173.77 175.371l43.242-136.133-6.407 261.055z' />
      <path fill='#fff5b5' d='M229.824 160.957l-33.633 147.344 41.641 51.25z' />
      <path fill='#ffe1ba' d='M101.7 111.309l19.218 164.96 40.039-78.476z' />
    </g>
  </svg>
)

Placeholder.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default () => (
  <article className='pullup content'>
    <Head>
      <meta
        name='Description'
        content='Über Full-Stack JavaScript Web-Entwickler Christian Mund.'
      />
      <title>Über ‖ {name}</title>
    </Head>
    <h1>Über Christian Mund</h1>
    <p>
      1995 surfte Christian als Jugendlicher zum ersten mal im Web und war
      sofort begeistert von den Möglichkeiten des neuen Mediums, seiner
      Infrastruktur und der Open-Source-Bewegung, die es möglich machte. Fortan
      bestimmte das Lernen und Ausprobieren dieser Technik einen Großteil seiner
      Freizeit.
    </p>
    <p>
      Schon bald beeinflusste das Web auch seine berufliche Laufbahn: Mit Anfang
      20 meldete er sein erstes Gewerbe an, um eine selbst-entwickelte "Unified
      Messaging"-Lösung auf Linux-Basis zu vermarkten. Anschließend gründete er
      mit einem Freund eine Firma, die WLAN-Hotspots für den öffentlichen
      Bereich herstellte und vertrieb. 2006 erhielt er schließlich die
      Möglichkeit, das Hamburger Büro einer etablierten Marketing-Agentur mit
      aufzubauen.
    </p>
    <figure className='center sm-right sm-m2' style={{ maxWidth: '300px' }}>
      <Image
        alt='Christian Mund mit ECHO (Foto: Marcus-Johannes Heinz)'
        height={400}
        placeholder={Placeholder}
        src='/static/photos/Christian_Mund_mit_Echo.jpg'
        width={300}
      />
      <img />
      <figcaption>
        <small>Christian Mund mit ECHO (Foto: Marcus-Johannes Heinz)</small>
      </figcaption>
    </figure>
    <p>
      Dort leitete er die Abteilung für IT-Systeme und Online-Aktivitäten und
      konnte vielfältige Erfahrungen mit den unterschiedlichsten
      Marketing-Konzepten sammeln. Sein Team entwickelte und gestaltete in
      ständiger Zusammenarbeit mit über 100 Partnern bundesweite Kampagnen im
      Print- und Online-Bereich. Zu den Highlights gehörte der Gewinn des
      ECHO-Preises mit der Firma im Jahr 2012.
    </p>
    <p>
      Im Bereich IT-Systeme verantwortete er die Konzeption, Programmierung und
      Weiterentwicklung von Webseiten, individuellen Redaktionssystemen für
      Print- und Online-Produkte sowie Intranet-Systemen in einer heterogene
      IT-Umgebung mit Windows- und Unix-Servern. Sein vormaliger Arbeitgeber
      vertraut ihm hier weiter - jetzt als Dienstleister.
    </p>
    <p>
      2013 kam der Wunsch nach einer neuen Herausforderung auf. Als das Web mit
      HTML5, der Weiterentwicklung von JavaScript und weiteren neuen
      Technologien einen großen Sprung machte, sah er darin eine Chance und
      nutze sie mit der Gründung von MUND
      <span className='red'>PROPAGANDA</span>.net als Outlet für seine
      freiberufliche Tätigkeit.
    </p>
    <p>
      Seit dem konzentriert er sich vor allem auf moderne, JavaScript-basierte
      Web-Technologien wie ES6+, React, Node.js, Webpack, Test-Automation,
      Virtualisierung und konnte damit viele interessante Projekte mit Kunden
      aus ganz Deutschland und Europa erfolgreich umsetzen.
    </p>
    <p>
      <a href='https://twitter.com/krist'>Twitter</a>
    </p>
  </article>
)
