import './site.sass'
import Logo from '../../img/logo-criapp.png'
import Graphy from '../../img/graphy-criapp.png'
import { Link } from "react-router-dom";
import ButtonPrimaryLigth from '../../Components/ButtonPrimaryLigth';


function Site() {
  return(

    <>
          <div id="site">
          <img id="site-logo" src={Logo} alt="Logo Criapp"/>
          <h1>Crie seus apps Delvery simples e rápido</h1>
          <img id="graphy" src={Graphy} alt="Imagem Criapp"/>
          <div id="corpo-texto">
            <p class="corpo-texto">Crie e gerencie aplicativos para sua empresa ou clientes.</p>
            <p class="corpo-texto" id="paragrafo">Compare e aprimore com o nosso construtor visual de interfaces que a <span id="span-criapp">Criapp</span> oferece.</p>
          </div>
          <Link to="login"><ButtonPrimaryLigth text="Criar App"></ButtonPrimaryLigth></Link>
      </div>
    </>

  )
}

export default Site