import "./FormCriarConta.css"
import LoginCriarConta from "../../components/cabecalhos/loginCriarConta/LoginCriarConta"
import Rodape from "../../components/rodape/Rodape"
import FormMoldCriarConta from "../../components/formularios/FormMoldCriarConta"


function FormCriarConta() {
    return(
        <>
            < LoginCriarConta/>
            <div id="containerForm">
                <div className="titleForm">
                    <h1>Criar conta</h1>
                </div>
                <FormMoldCriarConta />
                <div className="checked">
                    <input type="checkbox" id="meuCheckbox"/>
                    <label for="meuCheckbox" class="custom-checkbox"></label>
                    <p>
                    Quero receber por e-mail ofertas e novidades das loja da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                    </p>
                </div>
            </div>
            <Rodape />
        </>
    )
}

export default FormCriarConta