import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../Services/loginService";
import Swal from "sweetalert2";
import { UserContext } from "../Context/UserContext";

export default function useUser() {
  const { setUserData, userData } = useContext(UserContext) || {}
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState({
    loading: true,
    error: false,
  });

  const { token } = userData || {};

  const login = useCallback(
    ({ email, password }) => {
      loginService({ email, password })
        .then((data) => {
          setUserData({
            token: data.token,
            name: data.name,
          });
          Swal.fire({
            icon: "success",
            title: "Ingreso exitoso",
            timer: 1000,
          });
          setIsLoading({
            loading: false,
          });
          history("/dashboard", { replace: true });
        })
        .catch((err) => {
          if (err) {
            Swal.fire({
              icon: "error",
              title: err.response.data,
            });
          }
        });
    },
    [token]
  );

  const logout = useCallback(() => {
    setUserData();
    history("/");
    Swal.fire({
      title: "Sesión cerrada correctamente",
      icon: "success",
      timer: 1000,
      timerProgressBar: true,
    });
  }, [userData]);

  const { loading, error } = isLoading;
  return {
    isLogged: Boolean(token),
    login,
    logout,
    isLoginLoading: loading,
    setIsLoading,
    hasLoginError: error,
  };
}
