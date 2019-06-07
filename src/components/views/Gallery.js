import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import image from "../../data/image.json";
import history from "../../history";
import imageObject from "../../data/imageObject";

class Gallery extends React.Component {
  renderGallery() {
    const imageArray = Object.values(imageObject)[0];
    return imageArray.map((image, i) => {
      const imageBackground = {
        backgroundImage: `url(${image.path})`
      };
      return (
        <Link to={`/gallery/${i}`}>
          <div className="gallery__grid-item" style={imageBackground} />
        </Link>
      );
    });
  }

  renderImage() {
    if (this.props.match.params.id) {
      var id = this.props.match.params.id;
      if (!image[id]) {
        history.push("/gallery");
        return false;
      }
      return <Image image={image[id]} />;
    }
    console.log("hello");

    return this.renderGallery();
  }

  render() {
    return <div className="content__container">{this.renderImage()}</div>;
  }
}

export default Gallery;
