import { useState } from 'react';
import { CompFilhoA } from '../CompFilhoA/CompFilhoA';
import { CompFilhoB } from '../CompFilhoB/CompFilhoB';
import './CompPai.css';
import { BatataContext } from '../../contexts/BatataContext';
import React from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdb-react-ui-kit';

export function CompPai() {
  const [batata, setBatata] = useState('batata');

  function repetir() {
    setBatata(batata + 'a');
  }

  return (
    <div className="pai">
      <h3>Pai</h3>
      <button className="btn btn-primary" onClick={repetir}>
        Repetir
      </button>
      <p>
        <b>Valor:</b>
        {batata}
      </p>
      <BatataContext.Provider value={batata}>
      <CompFilhoA  />
      <CompFilhoB />
      </BatataContext.Provider>
     
    </div>
  );
}
