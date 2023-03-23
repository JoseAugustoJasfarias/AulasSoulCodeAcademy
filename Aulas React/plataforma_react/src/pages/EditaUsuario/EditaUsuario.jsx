import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { usuarios } from "../../components/Data/Usuarios";


export function EditaUsuario(){

  let params = useParams();
  let id = params.id;
  console.log(id);

  const usuario =usuarios.find( usuario => {
    return usuario.id === parseInt(id);
  })

  
  let navigate = useNavigate();

  function editar () {
    navigate("/usuarios");
  }


  return(
    <>
    <div className="edita-usurio">
    <h2>{usuario.nome}</h2>
    <span>{usuario.email}</span>
     <br />
    <span>{usuario.idade}</span>
    <br />

    <Button onClick={editar} variant="dark">Editar</Button>
    </div>
    </>
  )
}