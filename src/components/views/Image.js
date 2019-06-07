import React from "react";
import ReactDOM from "react-dom";
import history from "../../history";

const Image = props => {
  if (!props.image) {
    return false;
  }
  var background = {
    backgroundImage: `url(${props.image.path})`
  };
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/gallery")}
      className="gallery__modal-background"
    >
      <div onClick={e => e.stopPropagation()} className="">
        <div className="gallery__modal-image" style={background} />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Image;
