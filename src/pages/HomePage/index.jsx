import { useContext, useState, useEffect } from "react";
import { Header } from "../../components/Header";
import Style from "./style.module.scss";
import { UserContext } from "../../providers/UserStateContext";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/TechModal";
import { ToastContainer } from "react-toastify";
import { EditTechModal } from "../../components/TechModalEdit";

export function Dashboard() {
  const { user } = useContext(UserContext);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (user === null || (Array.isArray(user) && user.length === 1)) {
      const timeout = setTimeout(() => {
        setShouldRender(true);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setShouldRender(true);
    }
  }, [user]);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
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
      <CreateTechModal
        headerText={"Cadastrar Tecnologia"}
        buttonText={"Cadastrar Tecnologia"}
      />
      <EditTechModal
        headerText={"Tecnologia Detalhes"}
        buttonText={"Salvar alterações"}
      />
      <Header />
      <div className={Style.welcomeContainer}>
        <h1 className={Style.welcomeTitle}>Olá, {user.name}</h1>
        <p className={Style.welcomeText}>{user.course_module}</p>
      </div>
      <div className={Style.homeContainer}>
        <TechList />
      </div>
    </>
  );
}
