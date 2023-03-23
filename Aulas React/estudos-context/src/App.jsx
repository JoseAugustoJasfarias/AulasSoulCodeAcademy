import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CompPai } from './components/CompPai/CompPai';
import { NavBar } from './components/NavBar/NavBar';
import { Propriedades } from './components/Propriedades/Propriedades';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Perfil } from './pages/Perfil/Perfil';
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';

export function App() {
  const [temaEscuro, settemaEscuro] = useState(false);

  function alternar() {
    if (temaEscuro === true) {
      settemaEscuro(false);
    } else {
      settemaEscuro(true);
    }
  }

  return (
    <ThemeContext.Provider value={{temaEscuro: temaEscuro, alternar: alternar}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
/*    <Propriedades
        cidade="Ubajara"
        estado="CE"
        preco={9}
        ligado={false}
        info={[1, 2, 3]}
        objeto={{ nome: 'Almir', idade: 19 }}
      ></Propriedades>
      <hr />
      <Propriedades
        cidade="Tianguá"
        estado="CE"
        preco={10}
        ligado={true}
        info={[1, 100]}
        objeto={{ nome: 'Almir', idade: 30 }}
      ></Propriedades> */
