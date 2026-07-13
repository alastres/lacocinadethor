import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Sostenibilidad({ isActive }) {
  const { t } = useTranslation()

  return (
    <div className="sus-wrap">
      <div className="aL">
        <div className="label">{t('sus_label')}</div>
        <h2 className="td">
          {t('sus_title').split('\n').map((l, i) => <React.Fragment key={i}>{l}{i === 0 ? <br /> : null}</React.Fragment>)}
          {' '}<span className="ca">{t('sus_highlight')}</span>
        </h2>
        <p className="sus-sub">
          {t('sus_sub')}
        </p>
        <div className="sus-badges">
          <span className="s-badge">{t('sus_b1')}</span>
          <span className="s-badge">{t('sus_b2')}</span>
          <span className="s-badge">{t('sus_b3')}</span>
          <span className="s-badge">{t('sus_b4')}</span>
        </div>
      </div>

      <div className="sus-pillars aR">
        <div className="s-pillar">
          <div className="s-iw">🌍</div>
          <div>
            <div className="s-title">{t('sus_p1_title')}</div>
            <div className="s-desc">{t('sus_p1_text')}</div>
          </div>
        </div>
        <div className="s-pillar">
          <div className="s-iw">📦</div>
          <div>
            <div className="s-title">{t('sus_p2_title')}</div>
            <div className="s-desc">{t('sus_p2_text')}</div>
          </div>
        </div>
        <div className="s-pillar">
          <div className="s-iw">🌿</div>
          <div>
            <div className="s-title">{t('sus_p3_title')}</div>
            <div className="s-desc">{t('sus_p3_text')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
