import React from 'react'
import Head from 'next/head'
import Feedback from '../components/Feedback'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Toolbox from '../components/Toolbox'
import { name } from '../package.json'

export default () => (
  <div className='pullup'>
    <Head>
      <meta name='Description' content='Persönliche Website von Full-Stack Web-Entwickler & DevOps-Engineer Christian Mund.' />
      <title>
        Christian Mund: Full-Stack Web Developer & Product Engineer ‖ {name}
      </title>
    </Head>
    <Intro />
    <Toolbox />
    <Projects />
    <Feedback />
  </div>
)
