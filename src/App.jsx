import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDeck } from './hooks/useDeck.js'
import Nav from './components/Nav.jsx'
import Modal from './components/Modal.jsx'
import LangSwitcher from './components/LangSwitcher.jsx'
import Orbs from './components/Orbs.jsx'
import Hero from './components/slides/Hero.jsx'
import Mercado from './components/slides/Mercado.jsx'
import About from './components/slides/About.jsx'
import Catalogo from './components/slides/Catalogo.jsx'
import Calidad from './components/slides/Calidad.jsx'
import Ventajas from './components/slides/Ventajas.jsx'
import Sostenibilidad from './components/slides/Sostenibilidad.jsx'
import CTA from './components/slides/CTA.jsx'

const SLIDES = [
  { Component: Hero,           bg: 'bg-hero',    id: 'hero' },
  { Component: Mercado,        bg: 'bg-navy',    id: 'mercado' },
  { Component: About,          bg: 'bg-dark',    id: 'about' },
  { Component: Catalogo,       bg: 'bg-catalog', id: 'catalogo' },
  { Component: Calidad,        bg: 'bg-cream',   id: 'calidad' },
  { Component: Ventajas,       bg: 'bg-dark',    id: 'ventajas' },
  { Component: Sostenibilidad, bg: 'bg-green-l', id: 'sostenibilidad' },
  { Component: CTA,            bg: 'bg-cta',     id: 'cta' },
]

export default function App() {
  const { t } = useTranslation()
  const { current, prev, direction, goTo, next, total } = useDeck()
  const [modal, setModal] = useState(null) // { product, catLabel }
  const [tiltEls, setTiltEls] = useState([])

  const progress = ((current + 1) / total) * 100

  // tilt 3D effect
  useEffect(() => {
    const TILT_SEL = '.about-card,.ben-card,.s-pillar,.cta-ii'
    const applyTilt = (el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`
      })
      el.addEventListener('mouseleave', () => {
        el.style.transform = ''
      })
    }
    const obs = new MutationObserver(() => {
      document.querySelectorAll(TILT_SEL).forEach(el => {
        if (!el.dataset.tilt) {
          el.dataset.tilt = '1'
          applyTilt(el)
        }
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })
    return () => obs.disconnect()
  }, [])

  const getSlideClass = (i) => {
    if (i === current) return 'slide active'
    if (i === prev) {
      return direction === 'right' ? 'slide exit-left' : 'slide exit-right'
    }
    if (i > current) return 'slide'
    return 'slide'
  }

  return (
    <>
      <div id="progress" style={{ width: `${progress}%` }} />

      <div id="logo-badge">
        <div className="thor-brand">
          <img className="thor-iso" src="./assets/logo_iso.svg" alt="La Cocina de Thor isotipo" />
          <div className="thor-wordmark">
            <span className="thor-name">La Cocina de <span className="thor-strong">Thor</span>™</span>
            <span className="thor-tagline-sm">{t('logo_tagline')}</span>
          </div>
        </div>
      </div>

      <LangSwitcher />

      <div className="deck">
        {SLIDES.map(({ Component, bg, id }, i) => (
          <div
            key={id}
            className={`${getSlideClass(i)} ${bg}`}
            data-slide={i}
            id={id}
          >
            <Orbs />
            <Component
              isActive={i === current}
              onOpenModal={(product, catLabel) => setModal({ product, catLabel })}
              onGoToCatalog={() => goTo(3)}
            />
          </div>
        ))}
      </div>

      <Nav current={current} total={total} goTo={goTo} />

      {modal && (
        <Modal
          product={modal.product}
          catLabel={modal.catLabel}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}
