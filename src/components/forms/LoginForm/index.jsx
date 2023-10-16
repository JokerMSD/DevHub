import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import Style from "./style.module.scss";

export const LoginForm = () => {

  const { 
    register, 
    handleSubmit,
    formState: { errors },
   } = useForm({
    resolver : zodResolver(loginFormSchema)
   });

   const submit = (payload) => {
    console.log(payload)
   };


  return (
    <form 
    onSubmit={handleSubmit(submit)}
    className={Style.loginFormContainer} 
    action="submit">

      <Input 
      className={Style.inputLogin}
      type="email"
      id="email"
      label="Email"
      autoComplete="username"
      placeholder="Digite seu email"
      error={errors.email}
      {...register("email")}
      />

     <Input 
      className={Style.inputLogin}
      id="password"
      type="password"
      label="Senha"
      autoComplete="current-password"
      placeholder="Digite sua senha"
      error={errors.password}
      {...register("password")}
      />

      <button 
      className={Style.loginBtn} 
      type="submit"
      >Entrar</button>

    </form>
  );
};
