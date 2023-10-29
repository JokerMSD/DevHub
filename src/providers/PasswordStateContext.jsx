import { createContext } from "react";

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const viewPassword = (id) => {
    const password = document.querySelector(`input[name=${id}]`);
    if (password.type === "password") {
      password.type = "text";
    }
  };

  const hidePassword = (id) => {
    const password = document.querySelector(`input[name=${id}]`);
    if (password.type === "text") {
      password.type = "password";
    }
  };

  return (
    <PasswordContext.Provider
      value={{
        viewPassword,
        hidePassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export { PasswordProvider, PasswordContext };
