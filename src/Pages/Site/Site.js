import './site.sass'
import Logo from '../../img/logo-criapp.png'

function Site() {
  return(
    <div id="site">
      <img id="site-logo" src={Logo} alt="Logo Criapp"/>
      <h1>Crie seus apps Delvery rápido e simples</h1>
      <button id="site-btn">Criar App</button>
    </div>
  )
}

export default Site