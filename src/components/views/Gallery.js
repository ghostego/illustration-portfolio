import React from "react";
import Modal from "./Modal";
import imageObject from "../../data/imageObject";
import LazyLoad from "react-lazyload";

class Gallery extends React.Component {
  state = { currentImage: null, currentCategory: "all", showModal: false };
  componentDidMount() {
    this.getCategory();
    console.log(this.state);
  }

  showModal = id => {
    this.setState({ showModal: true, currentImage: id });
  };

  hideModal = () => {
    this.setState({ showModal: false, currentImage: null });
  };

  nextImage = () => {
    const nextID = this.state.currentImage + 1;
    if (imageObject["images"][nextID]) {
      this.setState({ currentImage: nextID });
    } else {
      return false;
    }
  };

  getCategory = () => {
    const category = this.props.match.params.category;
    if (this.props.match.params.category) {
      this.setState({ currentCategory: category });
    }
  };

  prevImage = () => {
    const prevID = this.state.currentImage - 1;
    if (imageObject["images"][prevID]) {
      this.setState({ currentImage: prevID });
    } else {
      return false;
    }
  };

  renderGallery() {
    const imageArray = Object.values(imageObject)[0];
    return imageArray.map((image, i) => {
      if (
        image.category === this.state.currentCategory ||
        this.state.currentCategory === "all"
      ) {
        const imageBackground = {
          backgroundImage: `url(${image.path})`
        };
        return (
          <LazyLoad>
            <div
              className="gallery__grid-item"
              key={image.id}
              style={imageBackground}
              onClick={() => this.showModal(image.id)}
            />
          </LazyLoad>
        );
      }
    });
  }

  render() {
    return (
      <>
        <div className="content__background" />
        <div className="content__container">
          {this.renderGallery()}
          <Modal
            image={imageObject["images"][this.state.currentImage]}
            show={this.state.showModal}
            hideModal={this.hideModal}
            id={this.state.currentImage}
            nextImage={this.nextImage}
            prevImage={this.prevImage}
          />
        </div>
      </>
    );
  }
}

export default Gallery;
