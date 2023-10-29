import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../Input";
import Style from "./style.module.scss";
import { UserContext } from "../../../providers/UserStateContext";

export const RegisterForm = () => {
  const {
    submitRegister,
    registerHandleSubmit,
    registerRegister,
    registerErrors,
    loading,
  } = useContext(UserContext);

  return (
    <form
      onSubmit={registerHandleSubmit(submitRegister)}
      className={Style.registerFormContainer}
    >
      <Input
        className={Style.inputRegister}
        label="Nome"
        type="text"
        id="name"
        noHaveSlash={true}
        noEye={true}
        error={registerErrors.name}
        placeholder="Digite aqui seu nome"
        {...registerRegister("name")}
      />

      <Input
        className={Style.inputRegister}
        autoComplete="username"
        label="Email"
        type="text"
        id="email"
        noHaveSlash={true}
        noEye={true}
        error={registerErrors.email}
        placeholder="Digite aqui seu email"
        {...registerRegister("email", { title: "Email inválido" })}
      />

      <div className={Style.inputEyeContainer1}>
        <Input
          className={Style.inputRegister}
          autoComplete="password"
          label="Senha"
          type="password"
          id="password"
          error={registerErrors.password}
          {...registerRegister("password")}
          placeholder="Digite aqui sua senha"
        />
      </div>

      <div className={Style.inputEyeContainer2}>
        <Input
          className={Style.inputRegister}
          autoComplete="password"
          label="Confirmar Senha"
          type="password"
          id="password2"
          error={registerErrors.password2}
          {...registerRegister("password2")}
          placeholder="Digite novamente sua senha"
        />
      </div>

      <Input
        className={Style.inputRegister}
        label="Bio"
        type="text"
        id="bio"
        noHaveSlash={true}
        noEye={true}
        error={registerErrors.bio}
        placeholder="Fale sobre você"
        {...registerRegister("bio")}
      />

      <Input
        className={Style.inputRegister}
        label="Contato"
        type="text"
        id="contact"
        noHaveSlash={true}
        noEye={true}
        error={registerErrors.contact}
        placeholder="opção de contato"
        {...registerRegister("contact")}
      />

      <label className={Style.label} htmlFor="course_module">
        Selecionar módulo
      </label>

      <select
        className={Style.selectRegister}
        {...registerRegister("course_module")}
      >
        <option selected disabled hidden>
          Selecione seu módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>

      {registerErrors.course_module ? (
        <p className={Style.error}>{registerErrors.course_module.message}</p>
      ) : null}

      <button type="submit" disabled={loading} className={Style.registerBtn}>
        Cadastrar
      </button>
    </form>
  );
};
