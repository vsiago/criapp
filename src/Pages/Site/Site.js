import './site.sass'
import Logo from '../../img/logo-criapp.png'
import { Link } from "react-router-dom";
import ButtonPrimaryLigth from '../../Components/ButtonPrimaryLigth';


function Site() {
  return(

    <>
          <div id="site">
          <img id="site-logo" src={Logo} alt="Logo Criapp"/>
          <h1>Crie seus apps Delvery simples e rápido</h1>
          <p>Crie e gerencie aplicativos para sua empresa ou clientes.
            Compare e aprimore apenas utilizando o celular.</p>
          <span>Teste grátis!</span>
          <Link to="login"><ButtonPrimaryLigth text="Criar App"></ButtonPrimaryLigth></Link>
      </div>
    </>

  )
}

export default Site