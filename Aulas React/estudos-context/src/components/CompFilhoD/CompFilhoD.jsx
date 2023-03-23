import { useContext } from 'react';
import { BatataContext } from '../../contexts/BatataContext';
import './CompFilhoD.css';
import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


export function CompFilhoD() {
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-d">
      <h3>Filho D</h3>

      <p>
        <b>Valor:</b>
        {resultado}
      </p>

      <MDBDropdown>
      <MDBDropdownToggle className="p-3 mb-2 bg-success bg-gradient text-white rounded-5">Olha aqui ↓</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>Ta vendo </MDBDropdownItem>
        <MDBDropdownItem link>Não ta vendo</MDBDropdownItem>
        <MDBDropdownItem link>Ta vendendo </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
  );
}
