import { useTranslation } from 'react-i18next'

export default function Ventajas({ isActive }) {
  const { t } = useTranslation()

  return (
    <div className="ben-wrap">
      <div className="a1">
        <div className="label">{t('ben_label')}</div>
        <h2 className="tw">
          {t('ben_title')}<br />
          <span className="ca">{t('ben_highlight')}</span>
        </h2>
      </div>
      <div className="ben-grid">
        <div className="ben-card a2">
          <div className="ben-num">01</div>
          <div className="ben-icon">📦</div>
          <div className="ben-title">{t('ben_c1_title')}</div>
          <div className="ben-text">{t('ben_c1_text')}</div>
        </div>
        <div className="ben-card a3">
          <div className="ben-num">02</div>
          <div className="ben-icon">💰</div>
          <div className="ben-title">{t('ben_c2_title')}</div>
          <div className="ben-text">{t('ben_c2_text')}</div>
        </div>
        <div className="ben-card a4">
          <div className="ben-num">03</div>
          <div className="ben-icon">🌿</div>
          <div className="ben-title">{t('ben_c3_title')}</div>
          <div className="ben-text">{t('ben_c3_text')}</div>
        </div>
        <div className="ben-card a5">
          <div className="ben-num">04</div>
          <div className="ben-icon">🎨</div>
          <div className="ben-title">{t('ben_c4_title')}</div>
          <div className="ben-text">{t('ben_c4_text')}</div>
        </div>
        <div className="ben-card a6">
          <div className="ben-num">05</div>
          <div className="ben-icon">🚚</div>
          <div className="ben-title">{t('ben_c5_title')}</div>
          <div className="ben-text">{t('ben_c5_text')}</div>
        </div>
        <div className="ben-card a6" style={{ animationDelay: '.76s' }}>
          <div className="ben-num">06</div>
          <div className="ben-icon">🤝</div>
          <div className="ben-title">{t('ben_c6_title')}</div>
          <div className="ben-text">{t('ben_c6_text')}</div>
        </div>
      </div>
    </div>
  );
}
