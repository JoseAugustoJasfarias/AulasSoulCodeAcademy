import './CompFilhoB.css';
import { useContext } from 'react';
import { BatataContext } from '../../contexts/BatataContext';
import React from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdb-react-ui-kit';

export function CompFilhoB() {
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-b">
      <h3>Filho B</h3>
      <p>
        Valor:
        <b>{resultado}</b>
      </p>

      <MDBPopover size="lg" color="danger" btnChildren="Clica não" dismiss>
        <MDBPopoverHeader>Ahhh hhaaa</MDBPopoverHeader>
        <MDBPopoverBody>Curioso você heim rsrs</MDBPopoverBody>
      </MDBPopover>
    </div>
  );
}
