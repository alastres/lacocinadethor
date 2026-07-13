import { useRef, useEffect } from 'react'
import Orbs from './Orbs.jsx'

export default function Deck({ slides, current, prev, direction, children }) {
  // children is an array of [SlideComponent, bgClass, slideIndex]
  return (
    <div className="deck">
      {children}
    </div>
  )
}
