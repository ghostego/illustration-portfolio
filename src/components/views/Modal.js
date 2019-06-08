import React from "react";
import ReactDOM from "react-dom";

const Image = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  if (props.show === false) {
    return false;
  }
  var background = {
    backgroundImage: `url(${props.image.path})`
  };
  return ReactDOM.createPortal(
    <div
      onClick={() => props.hideModal()}
      className={`gallery__modal-background ${showHideClassName}`}
    >
      <div onClick={e => e.stopPropagation()} className="">
        <div className="gallery__modal-image" style={background} />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Image;
