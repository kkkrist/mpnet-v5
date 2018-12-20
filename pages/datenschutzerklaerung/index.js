import React from 'react'
import Head from 'next/head'
import { name } from '../../package.json'

export default () => (
  <article className='pullup content'>
    <Head>
      <meta name='Description' content='Datenschutzerklärung für MUNDPROPAGANDA.net' />
      <title>Datenschutzerklärung ‖ {name}</title>
    </Head>
    <h1>Datenschutzerklärung</h1>
    <h2>Datenschutz</h2>
    <p>
      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
      sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
      entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
      Datenschutzerklärung.
    </p>
    <p>
      Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener
      Daten möglich. Soweit auf unseren Seiten personenbezogene Daten
      (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden,
      erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten
      werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
    </p>
    <p>
      Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
      Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
      lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
      möglich.
    </p>
    <h2>Server-Log-Files</h2>
    <p>
      Der Provider der Seiten erhebt und speichert automatisch Informationen in
      so genannten Server-Log Files, die Ihr Browser automatisch an uns
      übermittelt. Dies sind:
    </p>
    <ul>
      <li>Anonymisierte IP des zugreifenden Rechners</li>
      <li>Uhrzeit der Serveranfrage</li>
    </ul>
    <p>
      Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
      Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
      vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen,
      wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt
      werden.
    </p>
    <h2>SSL-Verschlüsselung</h2>
    <p>
      Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
      Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie
      an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
      verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
      Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol
      in Ihrer Browserzeile.
    </p>
    <p>
      Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an
      uns übermitteln, nicht von Dritten mitgelesen werden.
    </p>
    <h2>Recht auf Auskunft, Löschung, Sperrung</h2>
    <p>
      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
      gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
      den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung
      oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
      personenbezogene Daten können Sie sich jederzeit unter der im Impressum
      angegebenen Adresse an uns wenden.
    </p>
    <p>
      <em>
        Quelle: <a href='https://www.e-recht24.de'>eRecht24</a>
      </em>
    </p>
  </article>
)
