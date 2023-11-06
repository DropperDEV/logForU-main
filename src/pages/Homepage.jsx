import FrameBG from "../components/FrameBG";
import Text from "../components/Text";
import styles from "../components/Text.module.css";

function Homepage() {
  return (
    <FrameBG>
      <Text>
        <h1 className={styles.h1Homepage}>Bem vindo(a) á LOG FOR U</h1>
        <h2 className={styles.h2Homepage}>
          A Melhor e mais rápida transportadora de produtos de diversos tamanhos
          e tipos.
        </h2>
        <p className={styles.pHomepage}>
          Em um mundo globalizado e altamente competitivo, a eficácia logística
          é um diferencial que impulsiona o sucesso de empresas em diversos
          setores. A "Log for U" é um exemplo inspirador de uma empresa que
          alcançou um nível excepcional de eficácia em sua cadeia de
          suprimentos, destacando-se como líder no mercado.
        </p>
      </Text>
    </FrameBG>
  );
}

export default Homepage;
