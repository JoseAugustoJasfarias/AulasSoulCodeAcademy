import './Perfil.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';


export function Perfil() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;
  let iconeBtnDia = 'https://cdn-icons-png.flaticon.com/512/3073/3073665.png'
  let iconeBtnNoite = 'https://cdn-icons-png.flaticon.com/512/581/581601.png'
  return (
    <>
      <div className={temaEscuro ? 'bg-dark text-light' : 'bg-light text-dark'}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Digite seu Nome:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu Nome" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Digite seu Endereço</Form.Label>
            <Form.Control type="text" placeholder="Rua ... , N° ... , Cep ..." />
          </Form.Group>
         

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Digite seu País</Form.Label>
            <Form.Control type="text" placeholder="Brazil ...Coréia ..." />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Digite seu telefone</Form.Label>
            <Form.Control type="text" placeholder=" +xx (xx) xxxxx-xxxx" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Clique aqui para confirmar" />
          </Form.Group>
          <Button variant="primary" onClick={alternar} >
            Qual tema ?  {<img src={iconeBtnDia} alt="" width={16} />} | {<img src={iconeBtnNoite} width="16" alt="" />}
          </Button>
        </Form>
      </div>
    </>
  );
}
