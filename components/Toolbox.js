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
            <ToolboxItem item={item} key={index} />
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

// HTML5-Logo by W3C (CC BY 3.0)
// CSS3-Logo (c) by Mohl Design
// JS-Logo by Chris Williams
// Node.js-Logo (c) by Node.js Foundation
// PHP-Logo (c) by The PHP Group
// Linecons Database icon by Designmodo (CC BY 3.0)
// Server Cloud icon by www.flaticon.com/Freepik
// Repair Tools icon by www.flaticon.com/Freepik
