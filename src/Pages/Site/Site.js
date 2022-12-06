import './site.sass'
import Logo from '../../img/logo-criapp.png'


function Site() {
  return(

    <div id='container'>
          <div id="site">
          <img id="site-logo" src={Logo} alt="Logo Criapp"/>
          <h1>Crie seus apps Delvery simples e rápido</h1>
          <p>Crie e gerencie aplicativos para sua empresa ou clientes.
            Compare e aprimore apenas utilizando o celular</p>
          <span>Teste grátis!</span>
          <button id="site-btn">Criar App</button>
      </div>
    </div>

  )
}

export default Site