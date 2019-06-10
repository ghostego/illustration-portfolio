import React from "react";

class ContentBackground extends React.Component {
  state = { backgroundImage: "untitled1reverse" };
  componentWillMount() {
    this.randomBackgroundImages();
  }
  randomBackgroundImages = () => {
    const backgroundImages = [
      "untitled1reverse",
      "untitled1",
      "eyeooze1",
      "thesky",
      "WATERFALLsquare",
      "youdont",
      "1",
      "2",
      "3",
      "becameone",
      "cock1",
      "cock2",
      "cock3",
      "crawl1",
      "thebestcomeback",
      "iswhen",
      "untitled2"
    ];
    const backgroundImage =
      backgroundImages[this.getRandomInt(0, backgroundImages.length)];
    this.setState({ backgroundImage: backgroundImage });
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  renderBackgroundImage = () => {
    const backgroundImage = {
      backgroundImage: `url(/images/gif/${this.state.backgroundImage}.gif)`
    };
    return <div className="content__background" style={backgroundImage} />;
  };

  render() {
    return this.renderBackgroundImage();
  }
}

export default ContentBackground;
