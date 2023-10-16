import { Header } from "../../components/Header";
import Style from './style.module.scss'

export function Dashboard () {

  const username = 'Samuel Leão'

    return (
      <>
      <Header/>
      <div className={Style.welcomeContainer}>
        <h1 className={Style.welcomeTitle}>Olá, {username}</h1>
        <p className={Style.welcomeText}>Primeiro módulo (introdução ao Frontend)</p>
      </div>
      <div className={Style.dashboardContainer}>
        <h2 className={Style.dashboardTitle}>Que pena! Estamos em desenvolvimento :(</h2>
        <p className={Style.dashboardText}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
      </>
    )
}