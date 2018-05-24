import React, { Component, Fragment } from 'react';
import Lightbox from 'react-images';
import PhotoGallery from 'react-photo-gallery';
import './Gallery.css';

import img01 from '../../static/img/img01.jpg';
import img02 from '../../static/img/img02.jpg';
import img03 from '../../static/img/img03.jpg';
import img04 from '../../static/img/img04.jpg';
import img05 from '../../static/img/img05.jpg';
import img06 from '../../static/img/img06.jpg';

const PHOTO_SET = [
  { src: img01, width: 3, height: 4 },
  { src: img02, width: 1.5, height: 1 },
  { src: img03, width: 1.5, height: 1 },
  { src: img04, width: 1.5, height: 1 },
  { src: img05, width: 3, height: 4 },
  { src: img06, width: 1.5, height: 1 }
];

class Gallery extends Component {
  state = {
    currentImage: 0
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };

  render() {
    return (
      <Fragment>
        <PhotoGallery photos={PHOTO_SET} onClick={this.openLightbox} />
        <Lightbox images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Fragment>
    );
  }
}

export default Gallery;
