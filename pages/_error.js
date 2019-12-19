import React, { Component } from 'react'

export default class Error extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  state = { guru: true }

  render () {
    const { statusCode } = this.props
    return (
      <div>
        <article className='pullup'>
          <h1 className='center'>D'oh?!</h1>
          <p className='center emoji' />
          <p className='center'>
            {statusCode
              ? `Es ist ein Fehler auf dem Server aufgetreten (${
                  statusCode === 404 ? 'Inhalt nicht gefunden' : statusCode
                })!`
              : 'Es ist ein Fehler aufgetreten!'}
          </p>
        </article>
        {this.state.guru && (
          <div
            className='fixed bg-black bottom-0 left-0 right-0 top-0'
            onClick={() => this.setState({ guru: false })}
            style={{ cursor: 'pointer' }}
          >
            <div
              className='bold border border-blink center m2 p2'
              style={{
                color: 'var(--reallyred)',
                borderColor: 'var(--reallyred)',
                borderWidth: '0.5rem'
              }}
            >
              <p>Software Failure. Press left mouse button to continue.</p>
              <p>Guru Meditation #00000000.00000404</p>
            </div>
          </div>
        )}
        <style jsx>{`
          .border-blink {
            animation: blinky-borders 2s steps(1, end) infinite;
          }
          .emoji:after {
            content: '😯';
            font-size: 5rem;
            animation: desperation 1.5s ease infinite alternate;
          }
          @keyframes blinky-borders {
            50% {
              border-color: transparent;
            }
          }
          @keyframes desperation {
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
      </div>
    )
  }
}
