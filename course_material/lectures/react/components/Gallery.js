import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let { title, subtitle, imageLinks, infoLink } = item.volumeInfo;
            let { thumbnail } = imageLinks;
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={thumbnail}
                  className="book-img"
                  alt="book"
                />
                <p className="book-text">
                  {title}
                </p>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
