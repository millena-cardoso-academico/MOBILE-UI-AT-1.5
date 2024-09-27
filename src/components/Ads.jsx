import PropTypes from 'prop-types';
import styles from '../styles/Ads.module.css';

function Ads({ ads }) {
  return (
    <div className={styles.ads}>
      {ads.map((ad, index) => (
        <div key={index} className={styles.ad}>
          <img src={ad.image} alt={ad.alt} className={styles.adImage} />
          <p>
            {ad.text} <a href={ad.link} className={styles.link}>{ad.linkText}</a>
          </p>
        </div>
      ))}
    </div>
  );
}

Ads.propTypes = {
  ads: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Ads;