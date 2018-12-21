import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'

const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

export default class MyApp extends App {
  cursor = 0

  componentDidMount () {
    window.document.addEventListener('keydown', this.handleKeyDown, {
      passive: true
    })
  }

  handleKeyDown = ({ keyCode }) => {
    if (keyCode === KONAMI_CODE[this.cursor]) {
      this.cursor++
    } else if (this.cursor > 0) {
      this.cursor = 0
    }

    if (this.cursor === KONAMI_CODE.length) {
      window.document.removeEventListener('keydown', this.handleKeyDown)
      window.alert('KONAMI!')
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
