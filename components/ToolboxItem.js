import PropTypes from 'prop-types'
import React from 'react'

const ToolboxItem = ({ name, links }) => (
  <div className='flex items-center toolbox'>
    <div className='icon-wrapper circle'>
      <img src={`/static/svg/${name}.svg`} />
    </div>
    <div className='mb2 mr2'>
      <strong>{name}</strong>
      <br className='xs-display-none' />
      {links.map((link, index) => (
        <small key={index}>
          <a href={link.href} target='_blank'>
            {link.text}
          </a>
          {index !== links.length - 1 ? ', ' : ''}
        </small>
      ))}
    </div>

    <style jsx>{`
      .icon-wrapper {
        box-sizing: content-box;
        display: inline-block;
        height: 50px;
        max-height: 50px;
        max-width: 50px;
        width: 50px;
        margin-bottom: 1rem;
      }
      .icon-wrapper:not(:last-child) {
        margin-right: 1rem;
      }
      .icon-wrapper img {
        filter: grayscale(0.66);
        height: 50px;
        max-height: 50px;
        max-width: 50px;
        width: 50px;
      }
      @media (min-width: 52em) {
        .icon-wrapper {
          height: 75px;
          max-height: 75px;
          max-width: 75px;
          width: 75px;
          border: 3px solid #ddd;
          transition: all .25s ease-out;
        }
        .icon-wrapper img {
          height: 75px;
          max-height: 75px;
          max-width: 75px;
          width: 75px;
          padding: 0.66rem;
          transition: all .25s ease-out;
        }
        .toolbox:hover .icon-wrapper {
          border-color: transparent;
        }
        .toolbox:hover .icon-wrapper img {
          filter: grayscale(0);
          padding: 0;
        }
      }
    `}</style>
  </div>
)

ToolboxItem.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default ToolboxItem
