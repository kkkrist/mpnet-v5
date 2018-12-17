import React from 'react'
import Headline from './Headline'
import quotes from '../data/feedback.json'

const Feedback = () => (
  <div>
    <Headline>Das sagen die Kunden:</Headline>
    {quotes.map((item, index) => (
      <blockquote className='h4' key={index}>
        <p className='ml1' style={{ textIndent: '-0.5rem' }}>{item.quote}</p>
        <footer
          className='mb3 ml1 bold'
          dangerouslySetInnerHTML={item.author}
          style={{ fontStyle: 'normal' }}
        />
      </blockquote>
    ))}

    <style jsx>{`
      footer:before {
        color: #aaa;
        content: '–';
        margin-right: 0.25rem;
      }
      p:before,
      p:after {
        color: #aaa;
      }
      p:before {
        content: '\\201C';
      }
      p:after {
        content: '\\201D';
      }
    `}</style>
  </div>
)

export default Feedback
