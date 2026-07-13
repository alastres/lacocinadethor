import { useTranslation } from 'react-i18next'

export default function About({ isActive }) {
  const { t } = useTranslation()

  return (
    <div className="about-wrap">
      <div className="a1">
        <div className="label">{t('about_label')}</div>
        <h2 className="tw">
          {t('about_title')}<br />
          <span className="ca">{t('about_highlight')}</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-card a2">
          <span className="ac-icon">🏭🇪🇸</span>
          <div className="ac-title">{t('about_c1_title')}</div>
          <div className="ac-text">{t('about_c1_text')}</div>
        </div>
        <div className="about-card a3">
          <span className="ac-icon">🌿</span>
          <div className="ac-title">{t('about_c2_title')}</div>
          <div className="ac-text">{t('about_c2_text')}</div>
        </div>
        <div className="about-card a4">
          <span className="ac-icon">🐾</span>
          <div className="ac-title">{t('about_c3_title')}</div>
          <div className="ac-text">{t('about_c3_text')}</div>
        </div>
        <div className="about-card a5">
          <span className="ac-icon">🌍</span>
          <div className="ac-title">{t('about_c4_title')}</div>
          <div className="ac-text">{t('about_c4_text')}</div>
        </div>
      </div>

      <div className="mission a6">
        {t('about_mission')}
      </div>
    </div>
  )
}
