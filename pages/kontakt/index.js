import React from 'react'
import Head from 'next/head'
import { name } from '../../package.json'

export default () => (
  <article className='pullup content'>
    <Head>
      <title>Kontakt ‖ {name}</title>
    </Head>
    <h1>Kontakt</h1>
    <p>
      MUNDPROPAGANDA.net<br />
      Christian Mund<br />
      Lise-Meitner-Straße 2 (Technologiezentrum)<br />
      24941 Flensburg
    </p>
    <p>So erreichen Sie mich direkt:</p>
    <ul>
      <li>
        Telefon:{' '}
        <a href='tel:+49%346167%354%385%35%39'>+49 (0) 461 675 48 559</a>
      </li>
      <li>
        E-Mail:{' '}
        <a href='mailto:inf%6F@mun%64pro%70aganda.%6E%65t'>
          info@mundpropaganda.net
        </a>
      </li>
      <li>
        PGP:{' '}
        <a href='https://pgp.mit.edu/pks/lookup?search=0xE87882503EEF14CE&amp;op=index&amp;fingerprint=on&amp;exact=on'>
          0xE87882503EEF14CE
        </a>
      </li>
    </ul>
    <p>Bürozeiten: Montag bis Freitag 9:00 - 17:00 Uhr</p>
    <h2>Freelancing</h2>
    <p>
      Fragen Sie für Freelance-Tätigkeiten gerne meine aktuelle Verfügbarkeit,
      ein detailliertes CV mit Referenzen und meine aktuellen Stunden- und
      Tagessätze an. Auch stehe ich Ihnen und oder Ihren Kunden jederzeit gern
      für Interviews zur Verfügung.
    </p>
  </article>
)
