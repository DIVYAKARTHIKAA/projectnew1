import React from "react";
import PForm from "./patientrecordform";
import './patientrecordform.css';
import { Link } from 'react-router-dom';
const Pform2=()=>{
  return(
    <div className="brownMycontainer2">
      <div className="browncard12">
        <button class="brownbutton42"><Link to='/'>HOME</Link></button>
      <div className="browncard32">
        
      <div className="browntext123">BODHI PLUS</div>
      </div>
      <div className="browncard2">
        <div className="browncard-header2">PATIENT MEDICAL RECORD</div>
      
          </div>
          <PForm/>
          </div>

      
    </div>
    )
}

export default Pform2;