import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MainContent.module.css';
import selectIcon from '../images/botao_select.jpg'; // Verifique se o caminho da imagem está correto

function MainContent({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (id) => {
    setSelectedProduct((prevSelected) => (prevSelected === id ? null : id));
  };

  return (
    <div className={styles.mainContent}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`${styles.product} ${selectedProduct === product.id ? styles.selected : ''}`}
        >
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => handleSelect(product.id)} className={styles.selectButton}>
            <img src={selectIcon} alt="Selecionar" />
          </button>
        </div>
      ))}
    </div>
  );
}

MainContent.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainContent;
