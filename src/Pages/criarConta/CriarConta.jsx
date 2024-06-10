import { Link } from "react-router-dom";
import "../criarConta/CriarConta.css"
import LoginCriarConta from "../../components/cabecalhos/loginCriarConta/LoginCriarConta"
import Rodape from "../../components/rodape/Rodape"
import TenisLogin from "../../assets/tenisLogin.png"
import LogoGmail from "../../assets/symbolGmail.png"
import LogoFacebook from "../../assets/symbolFacebook.png"
function CriarConta() {
    return(
        <>
            <LoginCriarConta />
            <div id="createAccountBody">
                <div className="formCreateAccount">
                    <div className="titleCreateAccount">
                        <h1>Crie sua conta</h1>
                        <p>Já possui uma conta? Entre<Link className="acessLogin" to="login">aqui.</Link></p>  
                    </div>
                    <label className="inputCreateAccount" type="text">
                        Email*
                        <input type="text" placeholder="Insira seu email" />
                    </label>
                    <button className="btnCreateAccount"><Link className="linkFormCriarConta" to="/formularioCriarConta">Criar Conta</Link></button>
                    <div className="logGmailFaceCreateAccount">
                        <p>Ou faça login com </p>
                        <div className="imgGmailFaceCreateAccount">
                            <img className="imgGmailCreateAccount" src={LogoGmail} alt="simbolo do gmail" />
                            <img className="imgFacebookCreateAccount" src={LogoFacebook} alt="simbolo do facebook" />
                        </div>
                    </div>
                </div>
                <img className="tenisLoginCreateAccount" src={TenisLogin} alt="imagem de tenis nike" />
            </div>
            <Rodape/>
        </>
    )
}

export default CriarConta