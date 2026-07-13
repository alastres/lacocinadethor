import { useTranslation } from 'react-i18next'

export default function Calidad({ isActive }) {
  const { t } = useTranslation()

  return (
    <div className="qlty-wrap">
      <div>
        <div className="label lbl-green a1">{t('qlty_label')}</div>
        <h2 className="td a2">
          {t('qlty_title')}<br />
          <span className="cg">{t('qlty_highlight')}</span>
        </h2>
        <p className="qlty-sub a3">
          {t('qlty_sub')}
        </p>
        <div className="no-items a4">
          <span className="no-item">{t('qlty_no1')}</span>
          <span className="no-item">{t('qlty_no2')}</span>
          <span className="no-item">{t('qlty_no3')}</span>
          <span className="no-item">{t('qlty_no4')}</span>
          <span className="no-item">{t('qlty_no5')}</span>
        </div>
        <div className="cert-row a5">
          <div className="cert-badge">{t('qlty_cert1')}</div>
          <div className="cert-badge">{t('qlty_cert2')}</div>
          <div className="cert-badge">{t('qlty_cert3')}</div>
          <div className="cert-badge">{t('qlty_cert4')}</div>
        </div>
      </div>

      <div className="qlty-right">
        <div className="q-pillar a2">
          <div className="qi">🥩</div>
          <div>
            <div className="qt">{t('qlty_p1_title')}</div>
            <div className="qd">{t('qlty_p1_text')}</div>
          </div>
        </div>
        <div className="q-pillar a3">
          <div className="qi">🍎</div>
          <div>
            <div className="qt">{t('qlty_p2_title')}</div>
            <div className="qd">{t('qlty_p2_text')}</div>
          </div>
        </div>
        <div className="q-pillar a4">
          <div className="qi">💧</div>
          <div>
            <div className="qt">{t('qlty_p3_title')}</div>
            <div className="qd">{t('qlty_p3_text')}</div>
          </div>
        </div>
        <div className="q-pillar a5">
          <div className="qi">🔬</div>
          <div>
            <div className="qt">{t('qlty_p4_title')}</div>
            <div className="qd">{t('qlty_p4_text')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
