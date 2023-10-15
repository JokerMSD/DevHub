import { RegisterForm } from "../../components/forms/RegisterForm";
import Style from "./style.module.scss";

export function Register() {
  return (
    <>
      <main>
        <section className={Style.registerSection}>

          <div className={Style.registerBackHeader}>

          <img
            className={Style.registerLogo}
            width={200}
            height={200}
            src="../src/assets/logo.svg"
            alt="Site Logo"
          />
          <button 
          className={Style.backButton}
          onClick={() => window.location.replace("/")} 
          type="button" 
          title="Voltar" 
          aria-label="Voltar" 
          >Voltar</button>

          </div>

          <div className={Style.registerContainer}>

            <h1 className={Style.registerTitle}>Crie sua conta</h1>

            <small className={Style.registerSubtitle}>
              Rapido e grátis, vamos nessa
            </small>

            <RegisterForm />
          </div>
          
        </section>
      </main>
    </>
  );
}
