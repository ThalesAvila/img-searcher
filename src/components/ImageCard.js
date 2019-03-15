import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img src={description} alt={urls} />
      </div>
    );
  }
}

export default ImageCard;
