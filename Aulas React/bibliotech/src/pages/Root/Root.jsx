import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthContext";
import { Menu } from "../../components/Menu/Menu";

// Layout principal do App com Navbar Fixa
// As páginas com Navbar fixa: home, livros, empréstimos, etc
export function Root() {

  const usuarioLogado = useContext(AuthContext);

  if(usuarioLogado === null) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
