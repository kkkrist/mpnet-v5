import React from 'react'
import Head from 'next/head'
import { name } from '../../package.json'

export default () => {
  const gaOptOut = () => {
    window.document.cookie =
      'ga-disable-UA-39399012-2=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'
    window.alert(
      'Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.'
    )
  }

  return (
    <article className='pullup content'>
      <Head>
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
        Die Nutzung unserer Website ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>
      <h2>Cookies</h2>
      <p>
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
        richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
        Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
        sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem
        Rechner abgelegt werden und die Ihr Browser speichert.
      </p>
      <p>
        Die meisten der von uns verwendeten Cookies sind so genannte
        „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch
        gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
        diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim
        nächsten Besuch wiederzuerkennen.
      </p>
      <p>
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browser
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </p>
      <h2>Server-Log-Files</h2>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log Files, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </p>
      <ul>
        <li>Hostname/IP des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
      </ul>
      <p>
        Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
        Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen,
        wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt
        werden.
      </p>
      <h2>Google Analytics</h2>
      <p>
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
        Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View,
        CA 94043, USA.
      </p>
      <p>
        Google Analytics verwendet so genannte "Cookies". Das sind Textdateien,
        die auf Ihrem Computer gespeichert werden und die eine Analyse der
        Benutzung der Website durch Sie ermöglichen. Die durch den Cookie
        erzeugten Informationen über Ihre Benutzung dieser Website werden in der
        Regel an einen Server von Google in den USA übertragen und dort
        gespeichert.
      </p>
      <h3>IP Anonymisierung</h3>
      <p>
        Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
        Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
        der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
        über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
        gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
        von Google in den USA übertragen und dort gekürzt. Im Auftrag des
        Betreibers dieser Website wird Google diese Informationen benutzen, um
        Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten zusammenzustellen und um weitere mit der
        Websitenutzung und der Internetnutzung verbundene Dienstleistungen
        gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
        Analytics von Ihrem Browser übermittelte IP- Adresse wird nicht mit
        anderen Daten von Google zusammengeführt.
      </p>
      <p>
        Sie können die Speicherung der Cookies durch eine entsprechende
        Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
        darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
        Funktionen dieser Website vollumfänglich werden nutzen können. Sie
        können darüber hinaus die Erfassung der durch den Cookie erzeugten und
        auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
        Google sowie die Verarbeitung dieser Daten durch Google verhindern,
        indem Sie das unter dem folgenden Link verfügbare Browser-Plugin
        herunterladen und installieren:{' '}
        <a href='https://tools.google.com/dlpage/gaoptout?hl=de'>
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
      </p>
      <h3>Widerspruch gegen Datenerfassung</h3>
      <p>
        Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern,
        indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
        gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser
        Website verhindert:
      </p>
      <p>
        <button
          className='btn btn-small btn-outline border-gray'
          onClick={() => gaOptOut()}
        >
          Google Analytics deaktivieren
        </button>
      </p>
      <p>
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
        finden Sie in der Datenschutzerklärung von Google:{' '}
        <a href='https://support.google.com/analytics/answer/6004245?hl=de'>
          https://support.google.com/analytics/answer/6004245?hl=de
        </a>
      </p>
      <h2>SSL-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
        Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
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
        den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
        Thema personenbezogene Daten können Sie sich jederzeit unter der im
        Impressum angegebenen Adresse an uns wenden.
      </p>
      <p>
        <em>
          Quelle: <a href='https://www.e-recht24.de'>eRecht24</a>
        </em>
      </p>
    </article>
  )
}
