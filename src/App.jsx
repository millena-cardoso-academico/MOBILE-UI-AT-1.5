import styles from './App.module.css';
import Header from './components/Header';
import GlobalMenu from './components/GlobalMenu';
import ContextMenu from './components/ContextMenu';
import MainContent from './components/MainContent';
import Ads from './components/Ads';
import Footer from './components/Footer';
import anyaImg from './images/anya.webp';
import mrChimeraImg from './images/mr_chimera.webp';
import rengokuImg from './images/rengoku.webp';
import gojoImg from './images/gojo_gato.webp';
import chopperImg from './images/chopper.webp';
import totoroImg from './images/totoro.webp';
import zoroImg from './images/zoro.webp';
import tulipImg from './images/tulip.jpg';
import softImg from './images/agulhas_soft.jpg';
import armarinhoImg from './images/armarinho_saojose.webp';

const adsData = [
  {
    image: tulipImg,
    alt: "Tulip Kit",
    text: "Venha conhecer o kit Tulip Etmo Rose! Mais conforto e elegância em agulhas de crochê!",
    link: "https://tulip.com",
    linkText: "site",
  },
  {
    image: softImg,
    alt: "Agulhas Soft Círculo",
    text: "A perfeita combinação entre leveza e fofura, adquira a sua",
    link: "https://www.circulo.com.br/post/lancamento-agulha-de-croche-amigurumi-soft",
    linkText: "Agulha Soft Círculo",
  },
  {
    image: armarinhoImg,
    alt: "Armarinho São José",
    text: "Os melhores preços e a maior variedade de produtos para transformar suas ideias em arte. Venha para o",
    link: "https://www.armarinhosaojose.com.br",
    linkText: "Armarinho São José",
  },
];

function App() {
  const products = [
    { id: 1, name: 'Anya Forger', price: 'R$ 185', image: anyaImg },
    { id: 2, name: 'Mr. Chymera', price: 'R$ 220', image: mrChimeraImg },
    { id: 3, name: 'Rengoku', price: 'R$ 200', image: rengokuImg },
    { id: 4, name: 'Gojo Satoru Gato', price: 'R$ 110', image: gojoImg },
    { id: 5, name: 'Chopper', price: 'R$ 120', image: chopperImg },
    { id: 6, name: 'Totoro', price: 'R$ 130', image: totoroImg },
    { id: 7, name: 'Zoro', price: 'R$ 220', image: zoroImg },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <nav className={`${styles.globalMenu} ${styles.mobile}`}>
          <GlobalMenu />
        </nav>
        <Header />
      </div>
      <div className={styles.mainLayout}>
        <div className={styles.leftColumn}>
          <nav className={`${styles.globalMenu} ${styles.desktop}`}>
            <GlobalMenu />
          </nav>
          <div className={styles.contentArea}>
            <aside className={styles.contextMenu}>
              <ContextMenu />
            </aside>
            <main className={styles.mainContent}>
              <MainContent products={products} />
            </main>
          </div>
        </div>
        <aside className={styles.ads}>
          <Ads ads={adsData} />
        </aside>
      </div>
      <Footer
        storeName="Alquimia das Linhas"
        slogan="Transformando linhas em arte desde 2023"
        contactInfo={{
          email: "contato@alquimiadaslinhas.com",
          phone: "(11) 98765-4321",
          whatsapp: "(11) 91234-5678",
        }}
        address="Rua das Tramas, 123, Bairro do Crochê, São Paulo, SP - 01234-567"
        instagramLink="https://www.instagram.com/alquimiadaslinhas"
      />
    </div>
  );
}

export default App;
