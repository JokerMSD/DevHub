import Style from "./style.module.scss"



export const LoginForm = () => {
    
    return (
        <form className={Style.loginFormContainer} action="submit">

        <label 
          className={Style.label}
          htmlFor="email" 
        >Email</label>

        <input
        className={Style.inputLogin}
          name="email"
          id="email"
          type="email" 
          autoComplete="username"
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
          autoComplete="current-password"
          placeholder="Senha" 
        />

        <button 
        className={Style.loginBtn} 
        type="submit">Entrar</button>

       </form>
    );
};