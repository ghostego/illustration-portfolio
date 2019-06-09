import React from "react";
import ReactDOM from "react-dom";

const renderNextArrow = props => {
  console.log(props);
  if (props.nextImage) {
    return <div onClick={() => props.nextImage()}>CLICKME</div>;
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
        <div className="gallery__modal-image" style={background} />
        {props.image.title}
        <div onClick={() => props.prevImage()}>CLICKMEBACK</div>
        {renderNextArrow(props)}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Image;
