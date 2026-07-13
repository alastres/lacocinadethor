import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PRODS from '../../data/products.js'

export default function Catalogo({ isActive, onOpenModal }) {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('perros')

  const TABS = [
    { key: 'perros',     icon: '🐕', label: t('cat_tab_perros'),     cat: t('cat_dog_label') },
    { key: 'pienso',     icon: '🥘', label: t('cat_tab_pienso'),     cat: t('cat_pienso_label') },
    { key: 'gatos',      icon: '🐈', label: t('cat_tab_gatos'),      cat: t('cat_cat_label') },
    { key: 'salchichas', icon: '🌭', label: t('cat_tab_salchichas'), cat: t('cat_sal_label') },
    { key: 'snacks',     icon: '🦴', label: t('cat_tab_snacks'),     cat: t('cat_snk_label') },
    { key: 'vibrisse',   icon: '✨', label: t('cat_tab_vibrisse'),   cat: t('cat_vib_label') },
  ]

  const currentTab = TABS.find(t => t.key === activeTab)
  const products = PRODS[activeTab] || []

  return (
    <div className="cat-wrap">
      <div className="cat-head a1">
        <div className="label">{t('cat_label')}</div>
        <h2 className="tw">{t('cat_title')} <span className="ca">{t('cat_highlight')}</span></h2>
      </div>

      <div className="cat-tabs a2">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`cat-tab${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="t-icon">{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      <div className="prod-panel active a3">
        <div className="prod-grid">
          {products.map((p, i) => (
            <div
              key={i}
              className="prod-card"
              onClick={() => onOpenModal && onOpenModal(p, currentTab.cat)}
            >
              <div className="pimg-wrap">
                <img
                  className="pimg"
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  onLoad={e => e.target.parentElement.classList.add('img-loaded')}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                    e.target.parentElement.classList.add('img-loaded')
                  }}
                />
                <span className="pimg-fallback" style={{ display: 'none' }}>{p.emoji}</span>
                <div className="pclick">{t('cat_see')}</div>
              </div>
              <div className="pbody">
                <div className="pname">{t('p_' + p.key + '_name')}</div>
                <div className="ptagline">{t('p_' + p.key + '_tagline')}</div>
                <div className="pfooter">
                  <span className="pbadge">{p.size}</span>
                  <span className="pmore">{t('cat_more')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
