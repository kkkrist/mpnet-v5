import React, { Component } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import 'ace-css/css/ace.min.css'

const AMIGA_CODE = [84, 85, 82, 80, 69, 78, 84, 73, 78, 69]

export default class Layout extends Component {
  cursor = 0

  state = { amiga: false }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown, {
      passive: true
    })
  }

  handleKeyDown = ({ keyCode }) => {
    if (keyCode === AMIGA_CODE[this.cursor]) {
      this.cursor++
    } else if (this.cursor > 0) {
      this.cursor = 0
    }

    if (this.cursor === AMIGA_CODE.length) {
      window.document.removeEventListener('keydown', this.handleKeyDown)
      this.setState({ amiga: true })
    }
  }

  render () {
    const { children } = this.props

    return (
      <div className='max-width-4 mx-auto layout p3'>
        <Head>
          {this.state.amiga && (
            <link href='/static/css/amiga.css' rel='stylesheet' />
          )}
          <link href='/static/icons/favicon.png' rel='icon' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>

        <Header />

        <main>{children}</main>

        <Footer />

        <style jsx global>{`
          :root {
            --red: #eb0c00;
            --reallyred: #eb0c00;
            --silver: #ddd;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          a:not(.plain) {
            border-bottom: 1px solid var(--silver);
            box-shadow: inset 0 -2px 0 var(--silver);
            transition: all 0.2s ease-out;
          }
          a:not(.plain):hover {
            border-bottom: 1px solid var(--red);
            box-shadow: inset 0 -2px 0 var(--red);
          }
          body {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f9f9f9' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ffffff' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23f8f8f8' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23fcfcfc' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23f7f7f7' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f8f8f8' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f7f7f7' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23f5f5f5' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23f6f6f6' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23f1f1f1' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23f5f5f5' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23eeeeee' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
            //background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom;
            font-family: 'IBM Plex Mono', 'SFMono-Regular', Consolas,
              'Liberation Mono', Menlo, Courier, monospace;
          }
          p {
            margin: 0 0 0.5em 0;
          }
          .bg-red {
            background-color: var(--red);
          }
          .border-red {
            border-color: var(--red);
          }
          .content {
            hyphens: auto;
          }
          .no-wrap {
            white-space: nowrap;
          }
          .pullup {
            animation: 0.2s pullup ease-out forwards;
          }
          .red {
            color: var(--red);
          }
          @keyframes pullup {
            0% {
              opacity: 0;
              transform: translateY(1rem);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @font-face {
            font-display: fallback;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 400;
            src: local('IBM Plex Mono'), local('IBMPlexMono'),
              url('/static/fonts/ibm-plex-mono-v3-latin-regular.woff2')
                format('woff2'),
              url('/static/fonts/ibm-plex-mono-v3-latin-regular.woff')
                format('woff');
          }
          @font-face {
            font-display: fallback;
            font-family: 'IBM Plex Mono';
            font-style: italic;
            font-weight: 400;
            src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
              url('/static/fonts/ibm-plex-mono-v3-latin-italic.woff2')
                format('woff2'),
              url('/static/fonts/ibm-plex-mono-v3-latin-italic.woff')
                format('woff');
          }
          @font-face {
            font-display: fallback;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 500;
            src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
              url('/static/fonts/ibm-plex-mono-v3-latin-500.woff2')
                format('woff2'),
              url('/static/fonts/ibm-plex-mono-v3-latin-500.woff')
                format('woff');
          }
          @font-face {
            font-display: fallback;
            font-family: 'IBM Plex Mono';
            font-style: italic;
            font-weight: 500;
            src: local('IBM Plex Mono Medium Italic'),
              local('IBMPlexMono-MediumItalic'),
              url('/static/fonts/ibm-plex-mono-v3-latin-500italic.woff2')
                format('woff2'),
              url('/static/fonts/ibm-plex-mono-v3-latin-500italic.woff')
                format('woff');
          }
          @font-face {
            font-display: fallback;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
              url('/static/fonts/ibm-plex-mono-v3-latin-700.woff2')
                format('woff2'),
              url('/static/fonts/ibm-plex-mono-v3-latin-700.woff')
                format('woff');
          }
          @font-face {
            font-display: fallback;
            font-family: 'IBM Plex Mono';
            font-style: italic;
            font-weight: 700;
            src: local('IBM Plex Mono Bold Italic'),
              local('IBMPlexMono-BoldItalic'),
              url('/static/fonts/ibm-plex-mono-v3-latin-700italic.woff2')
                format('woff2'),
              url('/static/fonts/ibm-plex-mono-v3-latin-700italic.woff')
                format('woff');
          }
        `}</style>
      </div>
    )
  }
}
