import "./FormMoldCriarConta.css"
import InputForm from "../../components/inputs/Inputs"

function FormMoldCriarConta() {
    return(
        <>
            <div className="containerBodyForm">
                <div className="containerSubtitleForm">
                    <p>Informações Pessoais</p>
                    <hr />
                </div>
                <InputForm
                subtitle="Nome Completo*"
                placeholder="Insira seu nome"
                />
                <InputForm
                subtitle="CPF*"
                placeholder="Insira seu CPF"
                />
                <InputForm
                subtitle="E-mail*"
                placeholder="Insira seu email"
                />
                <InputForm
                subtitle="Celular*"
                placeholder="Insira seu celular"
                />
                <div className="containerSubtitleForm">
                    <p>Informações de Entrega</p>
                    <hr />
                </div>
                <InputForm
                subtitle="Endereço*"
                placeholder="Insira seu endereço"
                />
                <InputForm
                subtitle="Bairro*"
                placeholder="Insira seu bairro"
                />
                <InputForm
                subtitle="Cidade*"
                placeholder="Insira seu cidade"
                />
                <InputForm
                subtitle="CEP*"
                placeholder="Insira seu cep"
                />
                <InputForm
                subtitle="Complemento*"
                placeholder="Insira complemento"
                />
            </div>
        </>
    )
}

export default FormMoldCriarConta