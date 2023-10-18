import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Api } from "../../../services/Api";
import Style from "./style.module.scss";
import { toast } from "react-toastify";

export const LoginForm = ({setUser}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (payload) => {
    try {
      setLoading(true);
      const { data } = await Api.post("/sessions", payload);
      localStorage.setItem("@KenzieHub:token", data.token);
      setUser(data.user);
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1.5 * 1000);
    } catch (error) {
      if(error.response?.data.message === "Incorrect email / password combination"){
        toast.error("Email ou senha incorretos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }else{
        toast.error("Ops! Algo deu errado, aguarde alguns minutos e tente novamente", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2 * 1000);
    }
  };

  const submit = (payload) => {
    loginUser(payload);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={Style.loginFormContainer}>
      <Input
        className={Style.inputLogin}
        type="email"
        id="email"
        label="Email"
        noEye={true}
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
      disabled={loading}
      className={Style.loginBtn} 
      type="submit"
      >Entrar</button>

    </form>
  );
};
