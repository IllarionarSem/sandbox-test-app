import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>{t('home.welcome')}</h1>
      <Link to="/records">
        <button style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
          {t('home.goToRecords')}
        </button>
      </Link>
    </div>
  );
}

export default Home;
