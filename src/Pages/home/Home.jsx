import HeaderHome from "../../components/cabecalhos/headerHome/HeaderHome"
import "./Home.css"
import CardsDestaquesOpcaoUm from "../../components/cards/cardsDestaques/CardsDestaquesOpcaoUm"
import CardsDestaquesOpcaoDois from "../../components/cards/cardsDestaques/CardsDestaquesOpcaoDois"
import CardsProdutosEmAlta from "../../components/cards/produtosEmAlta/CardsProdutosEmAlta"
import IconeDeChama from "../../assets/iconeDeChama.png"
import TenisNikeAir from "../../assets/tenisNikeAir.png"
import Ornamento from "../../assets/ornamento.png"
import BlusaStarWarsStormTrooperSupreme from "../../assets/blusaStarWarsStormTrooperSupreme.png"
import TenisAdidasWhiteBlack from "../../assets/tenisAdidasWhiteBlack.png"
import HeadphoneBeatsBass from "../../assets/headphoneBeatsBass.png"
import VectorBlusa from "../../assets/vectorBlusa.png"
import VectorCalca from "../../assets/vectorCalca.png"
import VectorTenis from "../../assets/vectorTenis.png"
import VectorHeadphone from "../../assets/vectorHeadphone.png"
import ArrowForward from "../../assets/arrowForward.png"
import TenisKSwiss from "../../assets/tenisKSwiss.png"

function Home() {
    return (
      <>
        <HeaderHome />
        <div id="containerBody">
          <div className="textBody">
            <h4>Melhores ofertas personalizadas</h4>
            <h1>Queima de estoque Nike <img className="iconChama" src={IconeDeChama} alt="chama/fogo" /></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quo dolorem iure doloribus?</p>
            <button>Ver Ofertas</button>
          </div>
          <img className="tenisNikeAir" src={TenisNikeAir} alt="tenis nike air branco com detalhes vermelhos." />
          <img className="ornamento" src={Ornamento} alt="" />
        </div>
        <div className="containerDestaques">
          <h1 className="titleDestaques">Coleções em Destaque</h1>
          <div className="containerCardsDestaques">
            <CardsDestaquesOpcaoUm
              desconto = "30% OFF"
              title = "Novo Drop Supreme"
              imageSrc = {BlusaStarWarsStormTrooperSupreme}
              imageAlt = "Blusa da marca supreme com estampa do storm trooper de star wars"
            />
            <CardsDestaquesOpcaoUm
              desconto = "30% OFF"
              title = "Novo Drop Supreme"
              imageSrc = {TenisAdidasWhiteBlack}
              imageAlt = "Tenis adidas branco com detalhes pretos"
            />
            <CardsDestaquesOpcaoUm
              desconto = "30% OFF"
              title = "Novo Drop Supreme"
              imageSrc = {HeadphoneBeatsBass}
              imageAlt = "Headphone da marca supreme preto"
            />
          </div>
        </div>
        <div className="subcontainerDestaques">
          <h1 className="subtitleDestaques">Coleções em Destaque</h1>
          <div className="subCardsDestaques">
            <CardsDestaquesOpcaoDois 
            imageSrc = {VectorBlusa}
            imageAlt = "Imagem da silhueta de uma blusa com a cor de suas linhas rosa"
            descrisaoSubCard = "Blusas"
            />
            <CardsDestaquesOpcaoDois 
            imageSrc = {VectorCalca}
            imageAlt = "Imagem da silhueta de uma blusa com a cor de suas linhas rosa"
            descrisaoSubCard = "Calças"
            />
            <CardsDestaquesOpcaoDois 
            imageSrc = {VectorBlusa}
            imageAlt = "Imagem da silhueta de uma blusa com a cor de suas linhas rosa"
            descrisaoSubCard = "Bonés"
            />
            <CardsDestaquesOpcaoDois 
            imageSrc = {VectorHeadphone}
            imageAlt = "Imagem da silhueta de uma blusa com a cor de suas linhas rosa"
            descrisaoSubCard = "Headphones"
            />
            <CardsDestaquesOpcaoDois 
            imageSrc = {VectorTenis}
            imageAlt = "Imagem da silhueta de uma blusa com a cor de suas linhas rosa"
            descrisaoSubCard = "Tênis"
            />
          </div>
        </div>
        <div className="containerProdutosEmAlta">
            <div className="titleSubtitleProdutosEmAlta">
              <h1 className="titleProdutosEmAlta">Produtos em Alta</h1>
              <p>Ver todos <img src={ArrowForward} alt="imagem de seta apontando para a direita" /></p>
            </div>
            <div className="cardsProdutosEmAlta">
              <CardsProdutosEmAlta 
                promocao="30% OFF"
                imageSrc={TenisKSwiss}
                imageAlt="imagem de tenis k-swiss branco com detalhes em azul e laranja"
                SubDescricaoProdutosEmAlta="Tênis"
                descricaoProdutosEmAlta="K-Swiss V8 - Masculino"
                precoOriginalSubcard="$200"
                precoDescontoSubcard="$100"
              />
            </div>
        </div>
      </>
    )
  }
  
  export default Home
  