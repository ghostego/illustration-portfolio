import React from "react";
import Modal from "./Modal";
import imageObject from "../../data/imageObject";

class Gallery extends React.Component {
  state = { currentImage: null, currentCollection: null, showModal: false };

  showModal = id => {
    this.setState({ showModal: true, currentImage: id });
  };

  hideModal = () => {
    this.setState({ showModal: false, currentImage: null });
  };

  getImages = () => {};

  getImage = () => {};

  renderGallery() {
    console.log(imageObject["images"]);
    const imageArray = Object.values(imageObject)[0];
    return imageArray.map((image, i) => {
      const imageBackground = {
        backgroundImage: `url(${image.path})`
      };
      return (
        <div
          className="gallery__grid-item"
          key={image.id}
          style={imageBackground}
          onClick={() => this.showModal(image.id)}
        />
      );
    });
  }

  render() {
    return (
      <div className="content__container">
        {this.renderGallery()}
        <Modal
          image={imageObject["images"][this.state.currentImage]}
          show={this.state.showModal}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default Gallery;
