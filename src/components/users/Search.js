import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text: ''
    };
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        //calling prop function searchUsers and passing in text from from
        this.props.searchUsers(this.state.text);
        this.setState({text:''})
    }
    // gets the value from the text field using the onChange
    onChange = (e) => {
        this.setState({text: e.target.value})
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='search users...' value={this.state.text} onChange={this.onChange}/>
                    <input type='submit' value="search" className="btn btn-dark btn-block"/>
                </form>
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}

export default Search
