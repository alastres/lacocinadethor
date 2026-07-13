import { useTranslation } from 'react-i18next'
import { useCountUp } from '../../hooks/useCountUp.js'

export default function Hero({ isActive, onGoToCatalog }) {
  const { t } = useTranslation()
  useCountUp(isActive)

  return (
    <div className="hero-wrap">
      <div>
        <img className="hero-logo a1" src="./assets/logo_main.svg" alt="La Cocina de Thor" />
        <div className="hero-badge a1">{t('hero_badge')}</div>
        <h1 className="htitle a2">
          {t('hero_title1')}<br />
          {t('hero_title2')}<br />
          <span className="ca">{t('hero_highlight')}</span>
        </h1>
        <p className="hero-sub a3">
          {t('hero_sub')}
        </p>
        <div className="hero-stats a4">
          <div>
            <div className="hs-num" data-count="1.2" data-decimals="1" data-prefix="€">€1.2B</div>
            <div className="hs-lbl">{t('hero_stat1').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
          </div>
          <div>
            <div className="hs-num" data-count="34" data-suffix="M">34M</div>
            <div className="hs-lbl">{t('hero_stat2').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
          </div>
          <div>
            <div className="hs-num" data-count="12" data-prefix="+" data-suffix="%">+12%</div>
            <div className="hs-lbl">{t('hero_stat3').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
          </div>
        </div>
        <button className="hero-cta a5" onClick={onGoToCatalog}>
          {t('hero_cta')}
        </button>
      </div>

      <div className="hero-visual a4">
        <div className="hring r1"></div>
        <div className="hring r2"></div>
        <img
          className="hero-can"
          src="https://alfcan.shop/wp-content/uploads/2024/04/400-GR-PERRO-SALMON-600x919.png"
          alt="La Cocina de Thor lata salmón"
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'block'
          }}
        />
        <div style={{ display: 'none', fontSize: '8rem', animation: 'float 4.5s ease-in-out infinite' }}>🐟</div>
      </div>
    </div>
  )
}
