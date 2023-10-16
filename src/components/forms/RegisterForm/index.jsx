import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import Style from "./style.module.scss";

export const RegisterForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState:{ errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema)
  });



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
       error={errors.name}
       placeholder="Digite aqui seu nome" 
       {...register("name")} 
      />
      
       <Input 
       className={Style.inputRegister}
       autoComplete="username"
       label="Email"
       type="text"
       id="email"
       error={errors.email}
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
       error={errors.password}
       placeholder="Digite aqui sua senha"
       {...register("password",
        )} 
      />

  

       <Input 
       className={Style.inputRegister}
       autoComplete="password"
       label="Confirmar Senha"
       type="password"
       id="confirmPassword"
       error={errors.confirmPassword}
       placeholder="Digite novamente sua senha" 
       {...register("confirmPassword",  
      )} 
      />

       <Input 
       className={Style.inputRegister}
       label="Bio"
       type="text"
       id="bio"
       error={errors.bio}
       placeholder="Fale sobre você" 
      {...register("bio")} 
      />

       <Input 
       className={Style.inputRegister}
       label="Contato"
       type="text"
       id="contact"
       error={errors.contact}
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

      {errors ? <p className={Style.error}>{errors.module?.message}</p> : null}

      <button 
      type="submit"
      className={Style.registerBtn}
      >Cadastrar</button>
      
    </form>
  );
};
