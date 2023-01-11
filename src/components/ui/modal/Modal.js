import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const portalElement = document.getElementById("overlays");
const Modal = (props) => {

  return (
    <>
      { ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement) }
      { ReactDOM.createPortal(<Overlay> {props.children} </Overlay>, portalElement) }
    </>
  );

};

export default Modal;