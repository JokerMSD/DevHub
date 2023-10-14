import Style from "./style.module.scss";

export function Login() {
    
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

              <form className={Style.loginFormContainer} action="submit">

                <label 
                  className={Style.label}
                  htmlFor="email" 
                >Email</label>

                <input
                className={Style.inputLogin}
                  name="email"
                  id="email"
                  type="text" 
                  placeholder="Email" 
                />

                <h2 
                  className={Style.label}
                  htmlFor="password" 
                >Senha</h2>

                <input 
                  className={Style.inputLogin}
                  name="password"
                  id="password"
                  type="password" 
                  placeholder="Senha" 
                />

                <button 
                className={Style.loginBtn} 
                type="submit">Entrar</button>

               </form>
                <div className={Style.resgisterContainer}>
               
                   <small className={Style.small}>Ainda não possui uma conta?</small>

                   <button 
                   className={Style.registerBtn}
                   onClick={() => window.location.replace("../register")}  
                   >Cadastre-se</button>
               
                </div>



            </div>

        </section>

      </main>
    </>
  );
}
