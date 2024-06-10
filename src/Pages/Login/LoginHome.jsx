import { Link } from "react-router-dom";
import "./LoginHome.css"
import LoginCriarConta from "../../components/cabecalhos/loginCriarConta/LoginCriarConta"
import Rodape from "../../components/rodape/Rodape"
import TenisLogin from "../../assets/tenisLogin.png"
import LogoGmail from "../../assets/symbolGmail.png"
import LogoFacebook from "../../assets/symbolFacebook.png"

function LoginHome() {
    return (
      <>
        <LoginCriarConta />
        <div className="LoginBody">
          <div className="formLogin">
            <div className="formTitle">
              <h1>Acesse sua conta</h1>
              <p>Novo cliente? Então registre-se <Link className="criarConta" to="/criarConta">aqui.</Link></p>
            </div>
            <div className="formInput">
              <label className="inputLogin" type="text">Login* <input type="text" placeholder="Insira seu login ou email"/></label>
              <label className="inputpassword" type="text">Senha* <input type="password" placeholder="Insira sua senha"/></label>
            </div>
            <Link className="esqueciSenha" to="/esqueciMinhaSenha">Esqueci minha senha</Link>
            <button className="acessarConta"><Link className="linkAcessarConta" to="/">Acessar conta</Link></button>
            <div className="logGmailFace">
              <p >Ou faça login com </p>
              <div className="imgGmailFace">
                <img className="imgGmail" src={LogoGmail} alt="simbolo do gmail" />
                <img className="imgFacebook" src={LogoFacebook} alt="simbolo do facebook" />
              </div>
            </div>
          </div>
          <img className="tenisLogin" src={TenisLogin} alt="imagem de tenis nike" />
        </div>
        <Rodape />
      </>
    )
  }
  
  export default LoginHome