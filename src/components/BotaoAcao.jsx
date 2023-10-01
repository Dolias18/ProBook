import { Link } from "react-router-dom";

function BotaoAcao(props) {
    return(
        <div>
            <Link to={props.rota}>
              {props.titulo}
            </Link>
        </div>
    )
}

export default BotaoAcao