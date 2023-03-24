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
import { SuperHero } from './pages/SuperHero/SuperHero';
import { CadastrarEquipamento } from './pages/CadastrarEquipamento/CadastrarEquipamento';
import { CadastrarProgramadores } from './pages/CadastroProgramadores/CadastroProgramadores';
import { Section } from './components/Section/Section';




/* import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Login } from './pages/Login/Login';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { Perfil } from './pages/Perfil/Perfil';
import { Pokemon } from './pages/Pokemon/Pokemon';
import { Herois } from './pages/Herois/Herois';
import { Eletronicos } from './pages/Eletronicos/Eletronicos';
import { Programadores } from './pages/Programadores/Programadores'; */

const sections = [
  {
      title: "Section 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit molestias ratione eos vitae adipisci alias fugiat doloribus dignissimos fuga. Quia beatae velit nihil vero voluptatum cumque id iste explicabo veniam?"
  },
  {
      title: "Section 2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate doloribus sit impedit quos ratione exercitationem praesentium quam tempore culpa, excepturi adipisci soluta officia quas deserunt eum ad tempora a aut."
  },
  {
      title: "Section 3",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ullam optio perferendis provident vel repudiandae obcaecati! Reiciendis aspernatur non sapiente suscipit fuga asperiores, eum molestiae illum sequi voluptates eius perspiciatis."
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 
            ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
            Exemplo: exemplo.com/usuarios/3245/perfil
            Area de "perfil" do usuário "3245" dentro da relação de "usuarios".
          */}
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />}>
              <Route path="1" element={<Section title={sections[0].title} description={sections[0].description} />} />
              <Route path="2" element={<Section title={sections[1].title} description={sections[1].description} />} />
              <Route path="3" element={<Section title={sections[2].title} description={sections[2].description} />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuario/edit/:id" element={<EditaUsuario />} />   {/* :id -> Parametro de rota */}
            <Route path="/usuario/perfil/:id" element={<Perfil />} />
            <Route path="/login" element={<Login />} />

            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/superherois" element={<SuperHero />} />
            <Route path="/CadastrarEquipamentos" element={<CadastrarEquipamento />} />
            <Route path="/cadastrarProgramadores" element={<CadastrarProgramadores />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;























/*
 */


/* const Sections = [
  {
    title: 'Section 1',
    description:
      'Lorem t amet consectetur, adipatur sed quas officia totam, aliquid perferendis. Quam iste tempora blanditiis placeat natus doloribus pariatur asperiores sit culpa earum? Sint, delectus accusantium.'
  },
  {
    title: 'Section 2',
    description:
      ' ipsut. Pariatur sed quas officia totam, aliquid perferendis. Quam iste landitiis placeat natus doloribus pariatur asperiores sit culpa earum? Sint, delectus accusantium.'
  },
  {
    title: 'Section 3',
    description:
      'lor sit amet consectetur, adipisicing elit. Pariatur sed quas officia totam, aliquid perferendis. Quam iste tempora blanditiis placeat natus dores sit culpa earum? Sint, delectus accusantium.'
  }
];

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

              <Route path="/pokemon" element={<Pokemon />} />
              <Route path='/superHerois' element={<SuperHero/>} />
              <Route path='/cadastrarEquipamentos' element={<CadastrarEquipamento/>}/>
              <Route path='/cadastrarProgramadores' element={<CadastrarProgramadores/>} />



              <Route path="*" element={<NotFound />} />
              <Route path="/usuarios/perfil/:id" element={<Perfil />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
} */

/* export default App; */
