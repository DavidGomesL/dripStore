import CardsProdutosEmAlta from "../cards/cardsProdutosEmAlta/CardsProdutosEmAlta"
import TenisKSwiss from "../../assets/tenisKSwiss.png"

export default function ProdutosEmAlta() {
    return(
        <>
            <CardsProdutosEmAlta 
                promocao="30% OFF"
                imageSrc={TenisKSwiss}
                imageAlt="imagem de tenis k-swiss branco com detalhes em azul e laranja"
                SubDescricaoProdutosEmAlta="Tênis"
                descricaoProdutosEmAlta="K-Swiss V8 - Masculino"
                precoOriginalSubcard="$200"
                precoDescontoSubcard="$100"
              />
        </>
    )
}