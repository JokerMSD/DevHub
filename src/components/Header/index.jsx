import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import Style from "./style.module.scss"

export const Header = ({user, setUser}) => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser([])
        localStorage.removeItem("@KenzieHub:token");
        navigate("/")
    }

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
            onClick={handleLogout}
            type="button"
            title="Sair"
            aria-label="Sair"
            >Sair</button>

        </header>

    )
}