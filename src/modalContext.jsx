import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";
// style
import cross from "./assets/cross.svg";
import "./style/index.css";

export const ModalContext = createContext({
  show: false,
  toggleShow: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const ctxValue = {
    show,
    toggleShow: () => setShow((show) => !show),
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
};

export const ModalContextVersion = ({ modalContent }) => {
  // state of show
  const { show, toggleShow } = useContext(ModalContext);

  return show ? (
    // modal element here
    <div onClick={toggleShow} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-div">
        <div onClick={toggleShow} className="closeDiv">
          <img src={cross} className="closeLogo" />
        </div>
        {modalContent}
      </div>
    </div>
  ) : null;
};

ModalContextProvider.propTypes = {
  children: PropTypes.element,
};
ModalContextVersion.propTypes = {
  modalContent: PropTypes.element,
};
