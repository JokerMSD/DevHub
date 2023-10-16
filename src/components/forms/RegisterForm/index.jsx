import { Input } from "../../Input";
import Style from "./style.module.scss";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (payload) => {
    console.log(payload);
  };

  return (
    <form 
    onSubmit={handleSubmit(submit)}
    className={Style.registerFormContainer}
    >
      <Input 
       className={Style.inputRegister}
       label="Nome"
       type="text"
       id="name"
       required
       placeholder="Digite aqui seu nome" 
      {...register("name")} 
      />
      
      <Input 
       className={Style.inputRegister}
       autoComplete="username"
       label="Email"
       type="email"
       id="email"
       required
       placeholder="Digite aqui seu email" 
       {...register( "email",
        { title: "Email inválido" }
        )} 
      />

      <Input 
       className={Style.inputRegister}
       autoComplete="password"
       label="Senha"
       type="password"
       id="password"
       required
       placeholder="Digite aqui sua senha"
       {...register("password",
        { minLength: 8 },
        
        )} 
      />

      <Input 
       className={Style.inputRegister}
       autoComplete="password"
       label="Confirmar Senha"
       type="password"
       id="confirmPassword"
       required
       placeholder="Digite novamente sua senha" 
       {...register("confirmPassword",
        { minLength: 8 },
        
      )} 
      />

      <Input 
       className={Style.inputRegister}
       label="Bio"
       type="text"
       id="bio"
       required
       placeholder="Fale sobre você" 
      {...register("bio")} 
      />

      <Input 
       className={Style.inputRegister}
       required
       label="Contato"
       type="text"
       id="contact"
       placeholder="opção de contato" 
      {...register("contact")} 
      />

      <label
      className={Style.label} 
      htmlFor="module"
      >Selecionar módulo</label>

      <select 
      className={Style.selectRegister}
      {...register("module")} 
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
