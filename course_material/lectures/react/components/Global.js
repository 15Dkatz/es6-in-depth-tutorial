import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search() {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
    fetch(`${BASE_URL}${this.state.query}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('book items', json);
      let { items } = json;
      this.setState({items});
    })
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Book Explorer</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a Book"
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key == "Enter") {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items} />
      </div>
    )
  }
}

export default Global;
