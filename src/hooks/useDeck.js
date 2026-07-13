import { useState, useEffect, useCallback, useRef } from 'react'

const TOTAL = 8

export function useDeck() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [direction, setDirection] = useState('right')
  const animating = useRef(false)

  const goTo = useCallback((idx) => {
    if (animating.current) return
    setCurrent(c => {
      if (idx === c) return c
      animating.current = true
      setDirection(idx > c ? 'right' : 'left')
      setPrev(c)
      setTimeout(() => {
        setPrev(null)
        animating.current = false
      }, 520)
      return idx
    })
  }, [])

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo])
  const prev_ = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev_() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev_])

  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = (e.touches ? e.touches[0].clientX : e.clientX) }
    const onEnd = (e) => {
      const endX = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX)
      const dx = startX - endX
      if (Math.abs(dx) > 50) dx > 0 ? next() : prev_()
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev_])

  return { current, prev, direction, goTo, next, prev: prev_, total: TOTAL }
}
