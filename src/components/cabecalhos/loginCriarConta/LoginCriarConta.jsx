import "./LoginCriarConta.css"
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png"

function LoginCriarConta() {
    return (
      <>
        <div className="LogoPrincipal">
          <Link to="/">
            <img src={Logo} alt="Logo Digital Store" />
          </Link>
        </div>
      </>
    )
  }
  
  export default LoginCriarConta
  