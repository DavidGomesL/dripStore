

function CardsDestaques(props) {
    return(
        <>
            <div id="card">
                <div className="containerInforcaoDesconto">
                    <p className="subtilteCardDestaques">{props.desconto}</p>
                    <h1 className="titleInfoDesc">{props.title}</h1>
                    <button className="btnCardDestaque">Comprar</button>
                </div>
                <img className="imgCard" src={props.imageSrc} alt={props.imageAlt}/>
            </div>
        </>
    )
}

export default CardsDestaques