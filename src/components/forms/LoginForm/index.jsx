import { useContext } from "react";
import { Input } from "../../Input";
import Style from "./style.module.scss";
import { UserContext } from "../../../providers/UserStateContext";

export const LoginForm = () => {
  const {
    loading,
    submitLogin,
    loginRegister,
    loginHandleSubmit,
    loginErrors,
  } = useContext(UserContext);

  return (
    <form
      onSubmit={loginHandleSubmit(submitLogin)}
      className={Style.loginFormContainer}
    >
      <Input
        className={Style.inputLogin}
        type="email"
        id="email"
        label="Email"
        noHaveSlash={true}
        noEye={true}
        autoComplete="username"
        placeholder="Digite seu email"
        error={loginErrors.email}
        {...loginRegister("email")}
      />

      <Input
        className={Style.inputLogin}
        id="password"
        type="password"
        label="Senha"
        autoComplete="current-password"
        placeholder="Digite sua senha"
        error={loginErrors.password}
        {...loginRegister("password")}
      />

      <button disabled={loading} className={Style.loginBtn} type="submit">
        Entrar
      </button>
    </form>
  );
};
