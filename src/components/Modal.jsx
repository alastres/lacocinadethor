import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Modal({ product, catLabel, onClose }) {
  const { t } = useTranslation()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!product) return
    const raf = requestAnimationFrame(() => {
      overlayRef.current?.classList.add('open')
      // animate ing-fill bars
      setTimeout(() => {
        overlayRef.current?.querySelectorAll('.ing-fill').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%'
        })
      }, 120)
    })
    return () => cancelAnimationFrame(raf)
  }, [product])

  if (!product) return null

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div id="moverlay" ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div id="modal">
        <button className="m-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="m-inner">
          <div className="m-img-panel">
            {product.img
              ? <img id="m-img" src={product.img} alt={product.name} onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }} />
              : null}
            <span id="m-emoji" style={product.img ? {} : { display:'block' }}>{product.emoji}</span>
          </div>
          <div className="m-content">
            <div className="m-cat">{catLabel}</div>
            <div id="m-name">{t('p_' + product.key + '_full')}</div>
            <div id="m-tagline">{t('p_' + product.key + '_tagline')}</div>
            <div id="m-desc">{t('p_' + product.key + '_desc')}</div>

            <div className="m-sec">{t('modal_composition')}</div>
            <div className="ing-bars">
              {product.ings.map((ing, i) => (
                <div key={i} className="ing-row">
                  <div className="ing-meta">
                    <span className="ing-name">{t('p_' + product.key + '_ing' + i)}</span>
                    <span className="ing-pct">{ing.p}%</span>
                  </div>
                  <div className="ing-track">
                    <div className="ing-fill" data-pct={ing.p} style={{ background: ing.c }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="m-sec">{t('modal_benefits')}</div>
            <div className="m-bens">
              {product.bens.map((_, i) => (
                <div key={i} className="m-ben">
                  <span className="m-check">✓</span>
                  {t('p_' + product.key + '_b' + i)}
                </div>
              ))}
            </div>

            {product.size && (
              <span className="m-size">📦 {product.size}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
