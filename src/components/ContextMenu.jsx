import styles from '../styles/ContextMenu.module.css';

function ContextMenu() {
  return (
    <nav className={styles.contextMenu}>
      <ul>
        <li><a href="/detalhes">Ver mais detalhes</a></li>
        <li><a href="/similares">Amigurumis similares</a></li>
        <li><a href="/carrinho">Adicionar ao carrinho</a></li>
        <li><a href="/frete">Simular frete</a></li>
      </ul>
    </nav>
  );
}

export default ContextMenu;
