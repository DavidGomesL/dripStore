import "./Inputs.css"

function InputForm(props) {
    return(
        <>
            <div id="inputForms">
                <label className="subtitleInputform">
                    <p>{props.subtitle}</p>
                </label>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default InputForm