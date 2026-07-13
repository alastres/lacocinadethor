import { useTranslation } from 'react-i18next'
import { useCountUp } from '../../hooks/useCountUp.js'

export default function Mercado({ isActive }) {
  const { t } = useTranslation()
  useCountUp(isActive)

  return (
    <div className="mkt-wrap">
      <div className="a1">
        <div className="label">{t('mkt_label')}</div>
        <h2 className="tw">
          {t('mkt_title')}<br />
          <span className="ca">{t('mkt_highlight')}</span>
        </h2>
      </div>

      <div className="mkt-grid">
        <div className="mkt-card a2">
          <span className="mkt-icon">🛒</span>
          <div className="mkt-num" data-count="68" data-suffix="%">68%</div>
          <div className="mkt-lbl">{t('mkt_c1').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
        </div>
        <div className="mkt-card a3">
          <span className="mkt-icon">🏠</span>
          <div className="mkt-num" data-count="34" data-suffix="M">34M</div>
          <div className="mkt-lbl">{t('mkt_c2').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
        </div>
        <div className="mkt-card a4">
          <span className="mkt-icon">📈</span>
          <div className="mkt-num" data-count="12" data-prefix="+" data-suffix="%">+12%</div>
          <div className="mkt-lbl">{t('mkt_c3').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
        </div>
        <div className="mkt-card a5">
          <span className="mkt-icon">💰</span>
          <div className="mkt-num" data-count="47" data-prefix="€">€47</div>
          <div className="mkt-lbl">{t('mkt_c4').split('\n').map((l, i) => <span key={i}>{l}{i === 0 ? <br /> : null}</span>)}</div>
        </div>
      </div>

      <div className="insights a6">
        <div className="insight">
          <span className="insight-icon">🔍</span>
          <span>
            <strong>{t('mkt_i1_strong')}</strong>{t('mkt_i1_text')}
          </span>
        </div>
        <div className="insight">
          <span className="insight-icon">🇪🇸</span>
          <span>
            <strong>{t('mkt_i2_strong')}</strong>{t('mkt_i2_text')}
          </span>
        </div>
      </div>
    </div>
  )
}
