import React from "react";
import Modal from "./Modal";
import imageObject from "../../data/imageObject";
import LazyLoad from "react-lazyload";

class Gallery extends React.Component {
  state = {
    currentImage: null,
    currentCategory: this.props.match.params.category
      ? this.props.match.params.category
      : "all",
    showModal: false
  };

  componentDidMount() {
    this.getCategory();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const nextCategory = nextProps.match.params.category
        ? nextProps.match.params.category
        : "all";
      this.getCategory(nextCategory);
    }
  }

  showModal = id => {
    this.setState({ showModal: true, currentImage: id });
  };

  hideModal = () => {
    this.setState({ showModal: false, currentImage: null });
  };

  nextImage = () => {
    this.setState({ currentImage: this.nextID() });
  };

  nextID = () => {
    const nextID = this.state.currentImage + 1;
    return nextID;
  };

  nextImageExist = () => {
    if (!imageObject["images"][this.nextID()]) {
      return false;
    }
    return true;
  };

  getCategory = nextCategory => {
    const category = nextCategory
      ? nextCategory
      : this.props.match.params.category;
    if (category) {
      this.setState({ currentCategory: category });
    }
  };

  prevID = () => {
    const prevID = this.state.currentImage - 1;
    return prevID;
  };

  prevImage = () => {
    this.setState({ currentImage: this.prevID() });
  };

  prevImageExist = () => {
    if (!imageObject["images"][this.prevID()]) {
      return false;
    }
    return true;
  };

  renderGallery() {
    const imageArray = Object.values(imageObject)[0];
    return imageArray.map(image => {
      if (
        image.category === this.state.currentCategory ||
        this.state.currentCategory === "all"
      ) {
        const imageBackground = {
          backgroundImage: `url(${image.bgPath})`
        };
        return (
          <LazyLoad key={image.id}>
            <div
              className="gallery__grid-item"
              key={image.id}
              style={imageBackground}
              onClick={() => this.showModal(image.id)}
            />
          </LazyLoad>
        );
      } else {
        return false;
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
            nextImageExist={this.nextImageExist()}
            prevImage={this.prevImage}
            prevImageExist={this.prevImageExist()}
          />
        </div>
      </>
    );
  }
}

export default Gallery;
