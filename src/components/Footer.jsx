import PropTypes from 'prop-types';
import styles from '../styles/Footer.module.css';
import instagramIcon from '../images/instagram.png';

function Footer({ storeName, slogan, contactInfo, address, instagramLink }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.storeTitle}><strong>{storeName}</strong></p>
        <p><strong>{slogan}</strong></p>
        <p><strong>Contato:</strong></p>
        <p>E-mail: {contactInfo.email}</p>
        <p>Telefone: {contactInfo.phone}</p>
        <p>WhatsApp: {contactInfo.whatsapp}</p>
        <p>Endereço: {address}</p>
      </div>
      <a href={instagramLink} target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className={styles.instagramIcon} />
      </a>
    </footer>
  );
}

Footer.propTypes = {
  storeName: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  contactInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired,
  address: PropTypes.string.isRequired,
  instagramLink: PropTypes.string.isRequired,
};

export default Footer;