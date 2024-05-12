import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { NotFound, Persons, RegisterPerson, About, Login } from "./screens";
import { Footer, HeaderResponsive } from "./components";
import * as S from "./App.styles";

interface RootState {
  auth: {
    token: string;
  };
}

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <S.AppContainer>
        <HeaderResponsive />
        <div style={{ marginTop: "72px" }}>
          <Routes>
            <Route path="/" element={<About />} />
            {isLogged && (
              <Route path="/register-person" element={<RegisterPerson />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/found-person" element={<Persons />} />
            <Route path="/found-person/:id" element={<Persons />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </S.AppContainer>
    </BrowserRouter>
  );
};

export default App;
