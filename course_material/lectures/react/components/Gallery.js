import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternate = 'https://cdn0.iconfinder.com/data/icons/thin-photography/57/thin-367_photo_image_wall_unavailable_missing-512.png';

    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let { title, imageLinks, infoLink } = item.volumeInfo;
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                  className="book-img"
                  alt="book"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
