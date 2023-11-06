import Frame from "../components/Frame";
import Text from "../components/Text";
import Contato from "../components/Contato";
import image from "../assets/contrate-nos1.png";
import whatssap from "../assets/whatssap.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";


import SideImage from "../components/SideImage";
import SideText from "../components/SideText";

import stylesText from "../components/Text.module.css";
import stylesImage from "../components/SideImage.module.css";
import RowContatos from "../components/RowContatos";

function ContrateNos() {
  return (<>
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
          <h1 className={stylesText.h1Side}>Porque escolher a LOG FOR U</h1>
          <p className={stylesText.pSide}>
            Estamos prontos para fornecer soluções excepcionais para atender às
            suas necessidades. Nossa equipe altamente qualificada e dedicada
            está ansiosa para colaborar com você em projetos emocionantes e
            desafiadores. Ao escolher trabalhar conosco, você está optando por
            excelência, comprometimento e resultados impressionantes.
          </p>
        </Text>
        <RowContatos>
          <Contato>
            <img src={whatssap} alt="Whatssap" />
            <p className={stylesText.pContato}>(55) 85 8765-5566</p>
          </Contato>
          <Contato>
            <img src={instagram} alt="Instagram" />
            <p className={stylesText.pContato}>logforU</p>
          </Contato>
          <Contato>
            <img src={twitter} alt="Twitter" />
            <p className={stylesText.pContato}>logforU</p>
          </Contato>
        </RowContatos>
      </SideText>
    </Frame>
    </>
  );
}

export default ContrateNos;
