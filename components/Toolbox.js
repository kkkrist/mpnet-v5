import React from 'react'
import Headline from './Headline'
import ToolboxItem from './ToolboxItem'
import items from '../data/toolbox-items.json'

const Toolbox = () => (
  <div>
    <Headline>Lieblings-Werkzeug:</Headline>

    <div>
      {items.map((row, index) => (
        <div key={index} className='row flex flex-wrap'>
          {row.map((item, index) => (
            <ToolboxItem key={index} name={item.name} links={item.links} />
          ))}
        </div>
      ))}
    </div>

    <style jsx>{`
      @media (min-width: 52em) {
        .row {
          flex-wrap: nowrap;
        }
      }
    `}</style>
  </div>
)

export default Toolbox
