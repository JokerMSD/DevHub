import Style from "./Style.module.scss";
import { MdAdd } from "react-icons/md";
import { TechCard } from "./TechCard";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const TechList = () => {
  const { techData } = useContext(TechContext);

  const { handleOpenModal, handleDeleteTech } = useContext(TechContext);

  return (
    <>
      <section className={Style.techSection}>
        <div className={Style.techAddContainer}>
          <h1 className={Style.techTitle}>Tecnologias</h1>

          <button className={Style.addTech}>
            <MdAdd onClick={handleOpenModal} className={Style.addTechIcon} />
          </button>
        </div>

        <ul className={Style.techList}>
          {techData.map((tech, index) => (
            <TechCard
              key={index}
              tech={tech}
              onDeleteTechCallback={() => handleDeleteTech(tech)}
            />
          ))}
        </ul>
      </section>
    </>
  );
};
