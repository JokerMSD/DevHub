import { Link } from "react-router-dom";
import Style from "./style.module.scss"
import errorLogo from "../../assets/pngegg.png"

export const ErrorPage = () => {
    
    return (
        <div className={Style.ErrorPage}>
            <img src={errorLogo} className={Style.errorlogo}/>
            <p className={Style.errorSub} title="Page not found">Página não encontrada!</p>
            <Link to={"/"} className={Style.back}>Voltar</Link>
        </div>
    );
};