import { useTranslation } from 'react-i18next'

export default function CTA({ isActive }) {
  const { t } = useTranslation()

  return (
    <div className="cta-wrap">
      <div className="label a1">{t('cta_label')}</div>
      <h2 className="cta-title a2">
        {t('cta_title')}<br />
        <span className="ca">{t('cta_highlight')}</span>
      </h2>
      <p className="cta-sub a3">
        {t('cta_sub')}
      </p>
      <div className="cta-info a4">
        <a className="cta-ii" href="https://lacocinadethor.es" target="_blank" rel="noopener noreferrer">
          <div className="cta-ico">🌐</div>
          lacocinadethor.es
        </a>
        <a className="cta-ii" href="mailto:info@lacocinadethor.es">
          <div className="cta-ico">✉️</div>
          info@lacocinadethor.es
        </a>
        <a className="cta-ii" href="https://wa.me/34633283347" target="_blank" rel="noopener noreferrer">
          <div className="cta-ico">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.849L.057 23.5l5.8-1.522A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.836 9.836 0 01-5.031-1.382l-.361-.214-3.741.981.999-3.648-.235-.374A9.856 9.856 0 012.118 12C2.118 6.535 6.535 2.118 12 2.118c5.465 0 9.882 4.417 9.882 9.882 0 5.465-4.417 9.882-9.882 9.882z" />
            </svg>
          </div>
          633 28 33 47
        </a>
        <div className="cta-ii">
          <div className="cta-ico">🇪🇸</div>
          {t('cta_company')}
        </div>
      </div>
      <button
        className="cta-btn a5"
        onClick={() => window.open('https://lacocinadethor.es/contacto/', '_blank')}
      >
        {t('cta_btn')}
      </button>
      <img className="cta-logo a6" src="./assets/logo_main.svg" alt="La Cocina de Thor logo" />
      <div className="cta-div" />
    </div>
  );
}
