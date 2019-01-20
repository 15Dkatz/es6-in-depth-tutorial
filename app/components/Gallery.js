import React, {Component} from "react";

class Gallery extends Component{
  render () {
    const alternative_image = "http://s6.tinypic.com/255nkee_th.jpg";
    if(this.props.items === undefined){
      return (<h3>No book found</h3>);
    }
    return (
      <div>
        {
         
          this.props.items.map((item, index) =>{
            let { title, imageLinks, infoLink } = item.volumeInfo; 
            return (
              <a key={index} 
                  className="book"
                  href={infoLink}
                  target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternative_image}
                  alt="book image"
                  className="book-img"
                />
                <div className="book-text">{ title }</div>
              </a>
            )
          })
        }
      </div>
    );
  }
}

export default Gallery;
