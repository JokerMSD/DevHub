import logo from "../../assets/logo.svg";
import Style from "./style.module.scss"

export const Header = () => {

    return (

        <header className={Style.header}>

            <div className={Style.logoContainer}>

                <img 
                className={Style.logoImg} 
                src={logo} 
                alt="logo" 
                />

            </div>

            <button 
            className={Style.logoutButton} 
            onClick={() => window.location.reload()}
            type="button"
            title="Sair"
            aria-label="Sair"
            >Sair</button>

        </header>

    )
}