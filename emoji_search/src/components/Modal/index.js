import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import BackDrop from "../BackDrop";
import ModalOverlay from "../ModalOverlay";

const portalElement = document.querySelector("#overlays");

const Modal = ({ onToggle }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onToggle={onToggle} />,
        portalElement
      )}
    </>
  );
};

Modal.propTypes = {
  onToggle: PropTypes.func,
};

export default Modal;
