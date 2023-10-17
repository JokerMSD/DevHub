import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterForm } from "../../components/forms/RegisterForm";
import Logo from "../../assets/logo.svg";
import Style from "./style.module.scss";

export function Register() {
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
        <section className={Style.registerSection}>
          <div className={Style.registerBackHeader}>
            <img
              className={Style.registerLogo}
              width={200}
              height={200}
              src={Logo}
              alt="Site Logo"
            />
            <Link
              className={Style.backButton}
              to="/"
              type="button"
              title="Voltar"
              aria-label="Voltar"
            >
              Voltar
            </Link>
          </div>

          <div className={Style.registerContainer}>
            <h1 className={Style.registerTitle}>Crie sua conta</h1>

            <small className={Style.registerSubtitle}>
              Rapido e grátis, vamos nessa
            </small>

            <RegisterForm />
          </div>
        </section>
      </main>
    </>
  );
}
