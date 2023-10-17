import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";
import Logo from "../../assets/logo.svg";
import Style from "./style.module.scss";
import { ToastContainer } from "react-toastify";

export const Login = ({user, setUser}) => {

  return (
    <>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <section className={Style.loginSection}>
          <img
            className={Style.loginLogo}
            width={200}
            height={200}
            src={Logo}
            alt="Site Logo"
          />

          <div className={Style.loginContainer}>
            <h1 className={Style.loginTitle}>Login</h1>

            <LoginForm setUser={setUser}/>

            <div className={Style.resgisterContainer}>
              <small className={Style.small}>Ainda não possui uma conta?</small>

              <Link className={Style.registerBtn} to="/register">
                Cadastre-se
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
