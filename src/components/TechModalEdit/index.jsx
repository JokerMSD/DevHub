import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Input } from "../Input";
import { InputSelect } from "../InputSelect";
import Style from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const EditTechModal = ({ headerText, buttonText }) => {
  const [techName, setTechName] = useState("");
  const [techStatus, setTechStatus] = useState("");

  const { techId, loading, isEditModalOpen, handleCloseEditModal, updateTech } =
    useContext(TechContext);

  const handleAddTech = () => {
    const newTechStatus = {
      status: techStatus,
    };

    updateTech(techId, newTechStatus);

    setTechName("");
    setTechStatus("Iniciante");
  };

  return (
    <>
      <section
        id="editModal"
        className={`${Style.modalSection} ${
          isEditModalOpen ? Style.fadein : Style.hidden
        }`}
        style={{ visibility: isEditModalOpen ? "visible" : "hidden" }}
      >
        <div className={Style.modalHeader}>
          <p className={Style.modalHeaderText}>{headerText}</p>
          <button className={Style.modalCloseBtn}>
            <MdClose
              onClick={handleCloseEditModal}
              className={Style.modalCloseIcon}
            />
          </button>
        </div>

        <div className={Style.modalContainer}>
          <Input
            className={Style.techInput}
            label="Nome"
            type="text"
            noEye={true}
            noHaveSlash={true}
            placeholder="Digite o nome da tecnologia"
            value={techName}
            onChange={(e) => setTechName(e.target.value)}
          />

          <InputSelect
            className={Style.techInputSelect}
            label="Selecionar status"
            values={["Iniciante", "Intermediário", "Avançado"]}
            value={techStatus}
            onChange={(e) => setTechStatus(e.target.value)}
          />

          <button
            className={Style.addTechBtn}
            disabled={loading}
            onClick={handleAddTech}
          >
            {buttonText}
          </button>
        </div>
        <div onClick={handleCloseEditModal} className={Style.backdrop}></div>
      </section>
    </>
  );
};
