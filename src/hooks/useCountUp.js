import { useEffect } from 'react'

export function useCountUp(isActive) {
  useEffect(() => {
    if (!isActive) return
    const els = document.querySelectorAll('[data-count]')
    els.forEach(el => {
      const target = parseFloat(el.dataset.count)
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0
      const suffix = el.dataset.suffix || ''
      const prefix = el.dataset.prefix || ''
      const duration = 1400
      const start = performance.now()
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        const value = target * ease
        el.textContent = prefix + (decimals ? value.toFixed(decimals) : Math.round(value)) + suffix
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    })
  }, [isActive])
}
