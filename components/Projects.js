import React, { Component } from 'react'
import { Swipeable } from 'react-swipeable'
import Headline from './Headline'
import items from '../data/projects.json'

export default class Projects extends Component {
  state = { current: 0 }

  handleNext = () => {
    const { current } = this.state
    this.setState({ current: current >= items.length - 1 ? 0 : current + 1 })
  }

  handlePrev = () => {
    const { current } = this.state
    this.setState({ current: current === 0 ? items.length - 1 : current - 1 })
  }

  render () {
    const { current } = this.state

    return (
      <div>
        <Headline>Auf der Werkbank:</Headline>
        <Swipeable
          className='flex list-reset m0 overflow-hidden'
          nodeName='ul'
          onSwipedLeft={this.handlePrev}
          onSwipedRight={this.handleNext}
          onClick={this.handleNext}
          style={{ touchAction: 'pan-y' }}
        >
          {items.map((project, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={project.desc}
              style={{
                flex: '0 0 100%',
                opacity: index === current ? '1' : '0',
                transform: `translateX(-${index * 100}%) scale(${
                  index === current ? '1' : index > current ? '0.5' : '1.5'
                }) rotate(${index === current ? '0deg' : '-22.5deg'})`,
                transition: 'all 0.5s ease',
                zIndex: items.length - index,
                willChange: 'opacity, transform'
              }}
            />
          ))}
        </Swipeable>
        <div className='flex mt1'>
          <button
            className='btn btn-outline border-silver rounded mr1'
            onClick={this.handlePrev}
            style={{ borderWidth: '3px' }}
          >
            −
          </button>
          <button
            className='btn btn-outline border-silver rounded'
            onClick={this.handleNext}
            style={{ borderWidth: '3px' }}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}
