import React from "react";
import cl from "./ModalRight.module.css";

const ModalRight = ({ visible, setVisible, component, checkoutState, checkoutStateSet }) => {
  var rootClasses = [cl.modalBody];

    if (checkoutState) {
      rootClasses.push(cl.checkoutActive)
    }

  if (visible) {
    rootClasses.push(cl.active);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

function clearModal() {
  checkoutStateSet(false)
}

  return (
    <div>
      <div className={rootClasses.join(' ')} onClick={() => {setVisible(false); clearModal()}}>
        <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={cl.closeModal} onClick={() => {setVisible(false); clearModal()}}></div>
                {component}
            </div>
      </div>
    </div>
  );
};

export default ModalRight;
