import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/Api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../components/forms/LoginForm/loginForm.schema";
import { registerFormSchema } from "../components/forms/RegisterForm/registerForm.schema";
import { Loading } from "../components/Loading";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([null]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathname = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    const getProfile = async () => {
      try {
        setIsLoading(true);
        const { data } = await Api.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
        navigate(pathname);
      } catch (error) {
        throw new Error("Usuario não está logado!");
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    getProfile();
  }, []);

  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const {
    register: registerRegister,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerErrors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const navigate = useNavigate();

  const loginUser = async (payload) => {
    try {
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
      navigate("/user");
      window.location.reload();
    } catch (error) {
      if (
        error.response?.data.message ===
        "Incorrect email / password combination"
      ) {
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
      } else {
        toast.error("Ops! algo deu errado, tente novamente em alguns minutos", {
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
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const submitLogin = (payload) => {
    loginUser(payload);
  };

  const handleLogout = () => {
    localStorage.removeItem("@KenzieHub:token");
    setUser([null]);
    navigate("/");
  };

  const userRegister = async (payload) => {
    try {
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
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
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
      } else {
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
        setLoading(false);
      }, 5 * 1000);
    }
  };

  const submitRegister = (payload) => {
    userRegister(payload);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        handleLogout,
        loading,
        isLoading,
        setLoading,
        setIsLoading,
        submitLogin,
        submitRegister,
        loginRegister,
        registerRegister,
        loginHandleSubmit,
        registerHandleSubmit,
        loginErrors,
        registerErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
