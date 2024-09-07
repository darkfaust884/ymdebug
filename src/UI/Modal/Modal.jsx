import React, { useState } from "react";
import cl from "./Modal.module.css";

const Modal = ({ Modal, setModal, children }) => {
  const [a, setA] = useState(true)
  const rootClasses = [cl.modalBody];

  if (Modal && a) {
    rootClasses.push(cl.active);
  } 
  
  return (
    <div>
      <div className={rootClasses.join(' ')} onClick={() => {setA(false); setTimeout(() => {setA(true)}, 3000)}}>
        <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
      </div>
    </div>
  );
};

export default Modal;
