import React from 'react'
import Head from 'next/head'
import { name } from '../../package.json'

export default () => (
  <article className='pullup content'>
    <Head>
      <meta name='Description' content='Über Full-Stack JavaScript Web-Entwickler Christian Mund.' />
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
      <img
        alt='Christian Mund mit ECHO (Foto: Marcus-Johannes Heinz)'
        src='/static/photos/Christian_Mund_mit_Echo.jpg'
      />
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
      Seit dem konzentriert er sich vor allem auf moderne, JavaScript-basierte Web-Technologien wie
      ES6+, React, Node.js, Webpack, Test-Automation, Virtualisierung und konnte
      damit viele interessante Projekte mit Kunden aus ganz Deutschland und
      Europa erfolgreich umsetzen.
    </p>
    <p>
      <a href='https://twitter.com/krist'>Twitter</a>
    </p>
  </article>
)
