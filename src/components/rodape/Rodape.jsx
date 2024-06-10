import "./Rodape.css"
import LogoRodape from "../../assets/logoRodape.png"
import SymbolFacebookRodape from "../../assets/symbolFacebookRodape.png"
import SymbolInstagramRodape from "../../assets/symbolInstagramRodape.png"
import SymbolTwiterRodape from "../../assets/symbolTwiterRodape.png"

function Rodape() {

    const phoneNumber = "(85) 3051-3411"

    return(
        <>
            <div id="footer">
                <div id="containerFooter">
                    <div className="containerOne">
                        <img className="logoRodape" src={LogoRodape} alt="logo digital store" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis iure laborum in cum dolorum repudiandae vitae itaque nisi sequi!</p>
                        <div className="imgRodape">
                            <img className="symbolFacebookRodape" src={SymbolFacebookRodape} alt="simbolo do facebook" />
                            <img className="symbolInstagramRodape" src={SymbolInstagramRodape} alt="simbolo do instagram" />
                            <img className="symbolTwiterRodape" src={SymbolTwiterRodape} alt="simbolo do twiter" />
                        </div>
                    </div>
                    <div className="containerTwo">
                        <div className="containerInformãcoesRodape">
                            <h3>Informação</h3>
                            <p>Sobre Drip Store</p>
                            <p>Segurança</p>
                            <p>Wishlist</p>
                            <p>Blog</p>
                            <p>Trabalhe conosco</p>
                            <p>Meus Pedidos</p>
                        </div>
                        <div className="containerCategoriasRodape">
                            <h3>Categorias</h3>
                            <p>Camisetas</p>
                            <p>Calças</p>
                            <p>Bonés</p>
                            <p>Headphones</p>
                            <p>Tênis</p>
                        </div>
                    </div>
                    <div className="containerThree">
                        <h3>Contato</h3>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>{phoneNumber}</p>
                    </div>
                </div>
                <div className="horizontoLine"></div>
                <p>@ 2024 Digital College</p>
            </div>
        </>
    )
}

export default Rodape