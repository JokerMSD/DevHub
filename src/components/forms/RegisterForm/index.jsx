import Style from "./style.module.scss";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (e) => {
    console.log(e);
  };

  return (
    <form 
    onSubmit={handleSubmit(submit)}
    className={Style.registerFormContainer}
    >

      <label
      className={Style.label} 
      htmlFor="name"
      >Nome</label>

      <input
      className={Style.inputRegister} 
      {...register("name", { required: true })} 
      type="text" 
      placeholder="Digite aqui seu nome" 
      />

      <label
      className={Style.label} 
      htmlFor="email"
      >Email</label>

      <input
      className={Style.inputRegister} 
      autoComplete="username"
      {...register(
        "email", 
        { required: true },
        { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
        { title: "Email inválido" }
        )} 
      type="email" 
      placeholder="Digite aqui seu email" 
      />

      <label
      className={Style.label} 
      htmlFor="password"
      >Senha</label>

      <input
      className={Style.inputRegister} 
      autoComplete="password"
      {...register(
        "password", 
        { required: true },
        { minLength: 8 },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i }
        )} 
      type="password" 
      placeholder="Digite aqui sua senha"
       />

      <label
      className={Style.label} 
      htmlFor="confirmPassword"
      >Confirmar Senha</label>

      <input
      className={Style.inputRegister} 
      autoComplete="new-password"
      {...register(
        "confirmPassword", 
        { required: true },
        { minLength: 8 },
        { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i }
      )}  
      type="password" 
      placeholder="Digite novamente sua senha" 
      />

      <label
      className={Style.label} 
      htmlFor="bio"
      >Bio</label>

      <input
      className={Style.inputRegister} 
      {...register("bio", { required: true })} 
      type="text" 
      placeholder="Fale sobre você" 
      />

      <label
      className={Style.label} 
      htmlFor="contact"
      >Contato</label>

      <input
      className={Style.inputRegister} 
      {...register("contact", { required: true })} 
      type="text" 
      placeholder="opção de contato" 
      />

      <label
      className={Style.label} 
      htmlFor="module"
      >Selecionar módulo</label>

      <select 
      className={Style.selectRegister}
      {...register("module", { required: true })} 
      >
        <option selected disabled hidden>Selecione seu módulo</option>
        <option value="M1">Primeiro Módulo</option>
        <option value="M2">Segundo Módulo</option>
        <option value="M3">Terceiro Módulo</option>
        <option value="M4">Quarto Módulo</option>
        <option value="M5">Quinto Módulo</option>
      </select>

      <button 
      type="submit"
      className={Style.registerBtn}
      >Cadastrar</button>
      
    </form>
  );
};
