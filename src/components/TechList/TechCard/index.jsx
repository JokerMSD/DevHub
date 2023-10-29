import Style from "./Style.module.scss";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { deleteTech, setTechID } = useContext(TechContext);

  const { handleOpenEditModal } = useContext(TechContext);

  const handleOpenModal = () => {
    handleOpenEditModal();
    setTechID(tech.id);
  };

  return (
    <li>
      <div className={Style.techItemContainer}>
        <h1 className={Style.techItemTitle}>{tech.title}</h1>

        <div className={Style.techChange}>
          <p className={Style.techText}>{tech.status}</p>
          <button className={Style.modTech}>
            <MdOutlineModeEdit
              onClick={handleOpenModal}
              className={Style.modIcon}
            />
          </button>
          <button className={Style.removeTech}>
            <BsTrash3
              className={Style.delIcon}
              onClick={() => deleteTech(tech)}
              title="Deletar Tecnologia"
              aria-label="Deletar Tecnologia"
              tabIndex={0}
            />
          </button>
        </div>
      </div>
    </li>
  );
};
