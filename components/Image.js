import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Image extends PureComponent {
  static propTypes = {
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    placeholder: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
  }

  imgRef = React.createRef()

  state = { hasLoaded: false }

  componentDidMount () {
    const img = this.imgRef.current
    if (img && img.complete) {
      this.handleLoad()
    }
  }

  handleLoad = () => this.setState({ hasLoaded: true })

  render () {
    const { alt, height, placeholder: Placeholder, src, width } = this.props
    return (
      <div className='relative'>
        {!this.state.hasLoaded && (
          <Placeholder className='absolute' height={height} width={width} />
        )}
        <img
          alt={alt}
          onLoad={this.handleLoad}
          ref={this.imgRef}
          src={src}
          style={{ height: 'auto', width }}
        />
      </div>
    )
  }
}
