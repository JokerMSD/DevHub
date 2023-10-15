import { LoginForm } from "../../components/forms/LoginForm";
import Style from "./style.module.scss";

export const Login = () => {
    
  return (
    <>
      <main>
        
        <section className={Style.loginSection}>

          <img 
            className={Style.loginLogo}
            width={200} 
            height={200} 
            src="../src/assets/logo.svg" 
            alt="Site Logo"/>

            <div className={Style.loginContainer}>

             <h1 className={Style.loginTitle}>Login</h1>

                <LoginForm/>

                <div className={Style.resgisterContainer}>
               
                   <small className={Style.small}>Ainda não possui uma conta?</small>

                   <button 
                   className={Style.registerBtn}
                   onClick={() => window.location.replace("/register")}  
                   >Cadastre-se</button>
               
                </div>



            </div>

        </section>

      </main>
    </>
  );
}
