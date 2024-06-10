import { Link } from "react-router-dom";
import "./HeaderHome.css"
import Logo from "../../../assets/Logo.png"
import Search from "../../../assets/search.png"
import ShoppingCart from "../../../assets/shoppingCart.png"

function HeaderHome() {
    return(
        <>
            <div id="containerHeader">
                <div className="containerUm">
                    <img className="imgLogo" src={Logo} alt="logo digital store" />
                    <div className="inputHeader">
                        <input type="text" placeholder="Pesquisar produto"/>
                        <img className="imgSearch" src={Search} alt="imagem de lupa" />
                    </div>
                    <Link className="criarContaHeader" to="criarConta">Cadastre-se</Link>
                    <ul className="listHeaderHome">
                        <li>Home</li>
                        <li>Produtos</li>
                        <li>Categorias</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>
                <div className="containerDois">
                    <button><Link className="linkEntrarHeaderHome" to="login">Entrar</Link></button>
                    <img className="shoppingCart" src={ShoppingCart} alt="" />
                </div>
            
            </div>
        </>
    )
}

export default HeaderHome