import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "../../Input";
import { registerFormSchema } from "./registerForm.schema";
import { Api } from "../../../services/Api";
import Style from "./style.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const userRegister = async (payload) => {
    try {
      setLoading(true)
      await Api.post("/users", payload);
      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    }catch (error) {
      if(error.response?.data.message === "Email already exists"){
        toast.error("Email já cadastrado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }else {
        toast.error("Ops! Algo deu errado", {
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
        setLoading(false)
      },5*1000)
    }
  };

  const submit = (payload) => {
    userRegister(payload);
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
        {...register("email", { title: "Email inválido" })}
      />

      <Input
        className={Style.inputRegister}
        autoComplete="password"
        label="Senha"
        type="password"
        id="password"
        error={errors.password}
        {...register("password")}
        placeholder="Digite aqui sua senha"
      />

      <Input
        className={Style.inputRegister}
        autoComplete="password"
        label="Confirmar Senha"
        type="password"
        id="password2"
        error={errors.password2}
        {...register("password2")}
        placeholder="Digite novamente sua senha"
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

      <label className={Style.label} htmlFor="course_module">
        Selecionar módulo
      </label>

      <select className={Style.selectRegister} {...register("course_module")}>
        <option selected disabled hidden>
          Selecione seu módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado">
          Segundo Módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
      </select>

      {errors.course_module ? (
        <p className={Style.error}>{errors.course_module.message}</p>
      ) : null}

      <button type="submit" 
      disabled={loading}
      className={Style.registerBtn}
      >Cadastrar</button>
    </form>
  );
};
