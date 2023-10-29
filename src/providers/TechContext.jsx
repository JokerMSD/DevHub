import { createContext, useContext, useState } from "react";
import { Api } from "../services/Api";
import { UserContext } from "./UserStateContext";
import { toast } from "react-toastify";

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);

  const [techId, setTechID] = useState();
  const [loading, setLoading] = useState(false);
  const [techData, setTechData] = useState(user.techs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const createTech = async (techToAdd) => {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      setLoading(true);
      const response = await Api.post("/users/techs", techToAdd, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const Data = response.data;
      const createdAt = Data.created_at;
      const id = Data.id;
      const title = Data.title;
      const status = Data.status;
      const updatedAt = Data.updated_at;
      const techAdded = { createdAt, id, title, status, updatedAt };

      if (response.status === 201) {
        setTechData((prevTechData) => [...prevTechData, techAdded]);
        handleCloseModal();

        return;
      }
    } catch (error) {
      const errorMessage = error.response.data.message;
      if (
        errorMessage ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Você já possui esta tecnologia criada");
      } else {
        throw new Error(error);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const updateTech = async (id, techStatus) => {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      const response = await Api.put(`/users/techs/${id}`, techStatus, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response);

      if (response.status === 201) {
        setTechData((prevTechData) =>
          prevTechData.map((tech) =>
            tech.id === id ? { ...tech, status: techStatus.status } : tech,
          ),
        );
        handleCloseEditModal();

        return;
      }

      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteTech = async (tech) => {
    const token = localStorage.getItem("@KenzieHub:token");

    try {
      const response = await Api.delete(`/users/techs/${tech.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 204) {
        setTechData((prevTechData) =>
          prevTechData.filter((t) => t.id !== tech.id),
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        loading,
        isModalOpen,
        isEditModalOpen,
        techData,
        techId,
        setIsModalOpen,
        setTechID,
        handleOpenModal,
        handleOpenEditModal,
        handleCloseModal,
        handleCloseEditModal,
        createTech,
        updateTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechProvider };
