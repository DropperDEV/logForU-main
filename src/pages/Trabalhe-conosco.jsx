import Frame from "../components/Frame";
import Text from "../components/Text";
import Contato from "../components/Contato";
import image from "../assets/trabalhe-conosco1.png";
import whatssap from "../assets/whatssap.png";

import SideImage from "../components/SideImage";
import SideText from "../components/SideText";

import stylesText from "../components/Text.module.css";
import stylesImage from "../components/SideImage.module.css";
import RowContatos from "../components/RowContatos";

function ContrateNos() {
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
          <h1 className={stylesText.h1Side}>
            Venha Fazer Parte da Nossa Equipe
          </h1>
          <p className={stylesText.pSide}>
            Na LOG FOR U, acreditamos que nossa equipe é a força motriz por trás
            do nosso sucesso. Valorizamos a diversidade, a inovação e o
            comprometimento, e estamos sempre em busca de talentos
            especializados para se juntar a nós em nossa jornada. nós convidamos você a fazer parte de
            nossa equipe.
          </p>
        </Text>
        <RowContatos>
          <Contato>
            <img src={whatssap} alt="Whatssap" />
            <p className={stylesText.pContato}>(55) 85 8765-5566</p>
          </Contato>
        </RowContatos>
      </SideText>
    </Frame>
  );
}

export default ContrateNos;
