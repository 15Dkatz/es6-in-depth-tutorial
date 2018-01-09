import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
//import ReactDom from 'react-dom '

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('search', this.state.query);
    }
    render() {
        return (
            <div>
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text" 
                            placeholder="Search for a book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}  />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

export default Global