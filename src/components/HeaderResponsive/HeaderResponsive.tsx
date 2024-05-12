import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import * as S from "./HeaderResponsive.styles";
import { logout } from "../../actions/post";

interface RootState {
  auth: {
    token: string;
  };
}

const HeaderResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const redirectTo = (route: string) => {
    navigate(route);
    setIsOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: "auth/removeToken" });
    logout();
  };

  return (
    <S.HeaderContainer>
      <div className="navbar">
        <h2 onClick={() => redirectTo("/")}>Encontre RS</h2>
        <IoMenu onClick={toggleSidebar} size={30} className="icon" />
      </div>

      <div className={`sidebar ${isOpen && "sidebar-open"} `}>
        <button onClick={() => redirectTo("/")}>Sobre</button>
        <button onClick={() => redirectTo("/found-person")}>Pessoas</button>
        <button
          onClick={() => redirectTo(isLogged ? "/register-person" : "/login")}
        >
          Cadastrar pessoa
        </button>

        {isLogged && (
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

      <div
        className={`overlay ${isOpen && "overlay-open"}`}
        onClick={toggleSidebar}
      />
    </S.HeaderContainer>
  );
};

export default HeaderResponsive;
