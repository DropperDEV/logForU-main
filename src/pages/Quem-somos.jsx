import Frame from "../components/Frame";
import Text from "../components/Text";
import image from "../assets/quem-somos1.png";

import SideImage from "../components/SideImage";
import SideText from "../components/SideText";

import stylesText from "../components/Text.module.css";
import stylesImage from "../components/SideImage.module.css";

function QuemSomos() {
  return (
    <Frame>
      <SideImage>
        <img
          src={image}
          alt="depósito de cargas"
          className={stylesImage.image}
        />
      </SideImage>
      <SideText>
        <Text>
          <h1 className={stylesText.h1Side}>Os mais rápidos do mercado</h1>
          <p className={stylesText.pSide}>
            Na LOG FOR U, somos apaixonados por logística e dedicados a fornecer
            soluções de entrega rápida e eficiente para nossos clientes. Fundada
            em 1980, nossa empresa se tornou uma referência no setor de
            logística especializado em atendimento rápido. Nossa missão é
            simplificar a cadeia de suprimentos e melhorar a eficiência
            operacional para empresas de todos os tamanhos.
          </p>
        </Text>
      </SideText>
    </Frame>
  );
}

export default QuemSomos;
