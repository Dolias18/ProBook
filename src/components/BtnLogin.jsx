import { Link } from "react-router-dom";

function BtnLogin() {
    return(
        <div>
            <Link to={'/login'}>Login</Link>
        </div>
    )
}

export default BtnLogin