import { Button } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import { usuarios } from "../../components/Data/Usuarios";


export function Perfil (){

  let {id} = useParams("id");
 
  const perfil = usuarios.find( usuario => {
    return usuario.id === parseInt(id);
  })
  return(
    <>
    <div className="edita-usurio">
      <h1>Perfil</h1>
   
    <h2>{perfil.nome}</h2>
    <span>{perfil.email}</span>
     <br />
    <span>{perfil.idade}</span>
    <br />
    <Button variant="dark" >
      Voltar
    </Button>
    </div>
    <Outlet/>
    </>
  )
}