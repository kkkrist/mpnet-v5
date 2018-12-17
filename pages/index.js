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
      <title>
        Christian Mund: Full-Stack Web-Entwickler & DevOps-Engineer ‖ {name}
      </title>
    </Head>
    <Intro />
    <Toolbox />
    <Projects />
    <Feedback />
  </div>
)
