import { createContext, useState } from "react";

export const LoginAuthentication = createContext();

const LoginContext = ({ children }) => {
  const [isLoginAuth, setLoginAuth] = useState(
    JSON.parse(sessionStorage.getItem("isLoginAuth"))
  );
  const ToggleLoginauth = () => {
    setLoginAuth((item) => {
      sessionStorage.setItem("isLoginAuth", !item);
      return !item;
    });
  };
  return (
    <LoginAuthentication.Provider value={{ isLoginAuth, ToggleLoginauth }}>
      {children}
    </LoginAuthentication.Provider>
  );
};
export default LoginContext;
