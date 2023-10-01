import '../styles/Cadastro.css';

function InputComLabel(props) {
    return(
      <div className="content-input">
        <label>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    )
}

export default InputComLabel