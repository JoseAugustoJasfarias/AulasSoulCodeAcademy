import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usuarios } from '../../components/Data/Usuarios';

export function Usuarios() {
  

  return (
    <div className="usuario">
      <h1>Usuário</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>E-mail</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          
          {usuarios.map(usuario => {
            return (
              <tr key={usuario.id} >
                <td>{usuario.id}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.idade}</td>
                <td>{usuario.email}</td>
                <td>
                  <Link to={`/usuarios/edit/${usuario.id}`}>Editar</Link>
                </td>
                <td>
                  <Link to= {`/usuarios/perfil/${usuario.id}`}>Perfil</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
