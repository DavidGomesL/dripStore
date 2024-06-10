import "./CardsProdutosEmAlta.css"

function CardsProdutosEmAlta(props) {
    
    return(
        <>
            <div className="cardProdutosEmAlta">
                <div className="containerImgEPromo">
                    <p className="promocaoOff">{props.promocao}</p>
                    <img className="imgCardProdutosEmAlta" src={props.imageSrc} alt={props.imageAlt} />
                </div>
                <p className="SubDescricaoProdutosEmAlta">{props.SubDescricaoProdutosEmAlta}</p>
                <h3 className="descricaoProdutosEmAlta">{props.descricaoProdutosEmAlta}</h3>
                <div className="precosCardsProdutosEmAlta">
                    <h4 className="precoOriginalCardProdutosEmAlta">{props.precoOriginalSubcard}</h4>
                    <h4 className="precoDescontoCardProdutosEmAlta">{props.precoDescontoSubcard}</h4>
                </div>
            </div>
        </>
    )


}

export default CardsProdutosEmAlta