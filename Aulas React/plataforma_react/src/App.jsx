import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { Sessao1 } from './components/Sessao1/Sessao1';
import { Sessao3 } from './components/Sessao3/Sessao3';
import { Sessao2 } from './components/Sessao2/Sessao2';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { Perfil } from './pages/Perfil/Perfil';
import { Pokemon } from './pages/Pokemon/Pokemon';





const Sections = [
  {
    title: 'Section 1',
    description: 'Lorem t amet consectetur, adipatur sed quas officia totam, aliquid perferendis. Quam iste tempora blanditiis placeat natus doloribus pariatur asperiores sit culpa earum? Sint, delectus accusantium.'
  },
  {
    title: 'Section 2',
    description: ' ipsut. Pariatur sed quas officia totam, aliquid perferendis. Quam iste landitiis placeat natus doloribus pariatur asperiores sit culpa earum? Sint, delectus accusantium.'
  },
  {
    title: 'Section 3',
    description: 'lor sit amet consectetur, adipisicing elit. Pariatur sed quas officia totam, aliquid perferendis. Quam iste tempora blanditiis placeat natus dores sit culpa earum? Sint, delectus accusantium.'
  }
]

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />}>
                <Route path="/Sessao1" element={<Sessao1 />} />
                <Route path="/Sessao2" element={<Sessao2 />} />
                <Route path="/Sessao3" element={<Sessao3 />} />
              </Route>

              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/Usuarios" element={<Usuarios />} />
              <Route path="/usuarios/edit/:id" element={<EditaUsuario />} />
              <Route path="/Login" element={<Login />} />


            <Route path='/pokemon' element={<Pokemon/>}  />


              <Route path="*" element={<NotFound />} />
              <Route path="/usuarios/perfil/:id" element={<Perfil />}/>
            
          </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
