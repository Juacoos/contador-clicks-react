import React from "react";
import '../stylesheets/Contador.css';

function Contador({ nClicks }) {
  return(
    <div className="contador">
      {nClicks}
    </div>
  );
}

export default Contador;