

function CardsDestaquesOpcaoDois(props) {
    
    return(
        <>
            <div className="subCard">
                <img className="imgSubCardsDestaques" src={props.imageSrc} alt={props.imageAlt} />
                <p className="descricaoSubCard">{props.descrisaoSubCard}</p>
            </div>
        </>
    )


}

export default CardsDestaquesOpcaoDois