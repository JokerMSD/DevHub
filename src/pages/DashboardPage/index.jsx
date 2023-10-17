import { useEffect } from "react";
import { Header } from "../../components/Header";
import Style from './style.module.scss'

export function Dashboard ({user, setUser}) {

    return (
      <>
      <Header setUser={setUser} user={user} />
      <div className={Style.welcomeContainer}>
        <h1 className={Style.welcomeTitle}>Olá, {user.name}</h1>
        <p className={Style.welcomeText}>{user.course_module}</p>
      </div>
      <div className={Style.dashboardContainer}>
        <h2 className={Style.dashboardTitle}>Que pena! Estamos em desenvolvimento :(</h2>
        <p className={Style.dashboardText}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
      </>
    )
}