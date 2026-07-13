import { useTranslation } from 'react-i18next'

export default function Nav({ current, total, goTo }) {
  const { t } = useTranslation()
  return (
    <nav id="nav" aria-label="Navegación del deck">
      <button
        className="nav-btn"
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        aria-label={t('nav_prev')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>

      <span id="slide-counter">{current + 1}/{total}</span>

      <button
        className="nav-btn"
        onClick={() => goTo(current + 1)}
        disabled={current === total - 1}
        aria-label={t('nav_next')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}
