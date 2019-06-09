import React from "react";
import ReactDOM from "react-dom";

const renderNextArrow = props => {
  if (props.nextImageExist) {
    return (
      <div className="gallery__modal-next" onClick={() => props.nextImage()}>
        Next
      </div>
    );
  }
};

const renderPrevArrow = props => {
  if (props.prevImageExist) {
    return (
      <div className="gallery__modal-prev" onClick={() => props.prevImage()}>
        Previous
      </div>
    );
  }
};

const Image = props => {
  if (props.show === false) {
    return false;
  }
  var background = {
    backgroundImage: `url(${props.image.path})`
  };

  return ReactDOM.createPortal(
    <div
      onClick={() => props.hideModal()}
      className="gallery__modal-background"
      data-key={props.image.id}
    >
      <div onClick={e => e.stopPropagation()} className="">
        <div className="gallery__modal-image" style={background}>
          {renderPrevArrow(props)}
          {renderNextArrow(props)}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Image;
