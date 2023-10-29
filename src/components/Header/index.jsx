import logo from "./../../assets/logo.svg";
import Style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserStateContext";

export const Header = () => {
  const { handleLogout } = useContext(UserContext);

  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <img className={Style.logoImg} src={logo} alt="logo" />
      </div>

      <button
        className={Style.logoutButton}
        onClick={handleLogout}
        type="button"
        title="Sair"
        aria-label="Sair"
      >
        Sair
      </button>
    </header>
  );
};
