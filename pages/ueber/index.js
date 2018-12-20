import React, { PureComponent } from 'react'
import Head from 'next/head'
import { name } from '../../package.json'

export default class extends PureComponent {
  img = React.createRef()

  componentDidMount () {
    this.img.current.src = '/static/photos/Christian_Mund_mit_Echo.jpg'
  }

  render () {
    return (
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
          Infrastruktur und der Open-Source-Bewegung, die es möglich machte.
          Fortan bestimmte das Lernen und Ausprobieren dieser Technik einen
          Großteil seiner Freizeit.
        </p>
        <p>
          Schon bald beeinflusste das Web auch seine berufliche Laufbahn: Mit
          Anfang 20 meldete er sein erstes Gewerbe an, um eine
          selbst-entwickelte "Unified Messaging"-Lösung auf Linux-Basis zu
          vermarkten. Anschließend gründete er mit einem Freund eine Firma, die
          WLAN-Hotspots für den öffentlichen Bereich herstellte und vertrieb.
          2006 erhielt er schließlich die Möglichkeit, das Hamburger Büro einer
          etablierten Marketing-Agentur mit aufzubauen.
        </p>
        <figure className='center sm-right sm-m2' style={{ maxWidth: '300px' }}>
          <img
            alt='Christian Mund mit ECHO (Foto: Marcus-Johannes Heinz)'
            className='is-loading'
            onLoad={({ target }) => target.classList.remove('is-loading')}
            ref={this.img}
            src={`data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="768" height="1024"><rect x="0" y="0" width="768" height="1024" fill="%23807757"/><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%23000000" fill-opacity="0.501961" points="-16,57 -8,261 174,264"/><polygon fill="%23ffffbd" fill-opacity="0.501961" points="188,271 207,-16 75,5"/><polygon fill="%231c293d" fill-opacity="0.501961" points="177,162 155,56 143,263"/><polygon fill="%230b150e" fill-opacity="0.501961" points="2,271 74,-16 -11,80"/><polygon fill="%23f2ca96" fill-opacity="0.501961" points="104,53 90,178 39,127"/><polygon fill="%23000000" fill-opacity="0.501961" points="152,271 -16,248 102,160"/><polygon fill="%23fff7b5" fill-opacity="0.501961" points="195,168 98,-16 192,-11"/><polygon fill="%23fffeb9" fill-opacity="0.501961" points="145,108 148,222 121,196"/><polygon fill="%233ca3d9" fill-opacity="0.501961" points="16,63 71,-16 -16,4"/><polygon fill="%234b3400" fill-opacity="0.501961" points="132,145 133,35 115,98"/><polygon fill="%23ffebac" fill-opacity="0.501961" points="204,271 157,249 185,79"/><polygon fill="%23e0c181" fill-opacity="0.501961" points="63,193 43,106 37,149"/></g></svg>`}
          />
          <figcaption>
            <small>Christian Mund mit ECHO (Foto: Marcus-Johannes Heinz)</small>
          </figcaption>
          <style jsx>{`
            img {
              transition: all 0.25s ease-out;
            }
            img.is-loading {
              filter: blur(5px);
            }
          `}</style>
        </figure>
        <p>
          Dort leitete er die Abteilung für IT-Systeme und Online-Aktivitäten
          und konnte vielfältige Erfahrungen mit den unterschiedlichsten
          Marketing-Konzepten sammeln. Sein Team entwickelte und gestaltete in
          ständiger Zusammenarbeit mit über 100 Partnern bundesweite Kampagnen
          im Print- und Online-Bereich. Zu den Highlights gehörte der Gewinn des
          ECHO-Preises mit der Firma im Jahr 2012.
        </p>
        <p>
          Im Bereich IT-Systeme verantwortete er die Konzeption, Programmierung
          und Weiterentwicklung von Webseiten, individuellen Redaktionssystemen
          für Print- und Online-Produkte sowie Intranet-Systemen in einer
          heterogene IT-Umgebung mit Windows- und Unix-Servern. Sein vormaliger
          Arbeitgeber vertraut ihm hier weiter - jetzt als Dienstleister.
        </p>
        <p>
          2013 kam der Wunsch nach einer neuen Herausforderung auf. Als das Web
          mit HTML5, der Weiterentwicklung von JavaScript und weiteren neuen
          Technologien einen großen Sprung machte, sah er darin eine Chance und
          nutze sie mit der Gründung von MUND
          <span className='red'>PROPAGANDA</span>.net als Outlet für seine
          freiberufliche Tätigkeit.
        </p>
        <p>
          Seit dem konzentriert er sich vor allem auf moderne,
          JavaScript-basierte Web-Technologien wie ES6+, React, Node.js,
          Webpack, Test-Automation, Virtualisierung und konnte damit viele
          interessante Projekte mit Kunden aus ganz Deutschland und Europa
          erfolgreich umsetzen.
        </p>
        <p>
          <a href='https://twitter.com/krist'>Twitter</a>
        </p>
      </article>
    )
  }
}
