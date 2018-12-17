import React, { Component } from 'react'

export default class Error extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    return (
      <article className='pullup'>
        <h1>D'oh?!</h1>
        <p className='center emoji' />
        <p className='center'>
          {statusCode
            ? `Es ist ein Fehler auf dem Server aufgetreten (${
              statusCode === 404 ? 'Inhalt nicht gefunden' : statusCode
            })!`
            : 'Es ist ein Fehler aufgetreten!'}
        </p>
        <style jsx>{`
          .emoji:after {
            content: '😯';
            font-size: 5rem;
            animation: blinking 1.5s ease infinite alternate;
          }
          @keyframes blinking {
            0% {
              content: '😯';
            }
            50% {
              content: '😧';
            }
            100% {
              content: '😩';
            }

          }
        `}</style>
      </article>
    )
  }
}
