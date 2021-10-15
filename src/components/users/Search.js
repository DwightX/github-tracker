import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text: ''
    };
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something', 'light')
        }else{
                    //calling prop function searchUsers and passing in text from from
        this.props.searchUsers(this.state.text);
        this.setState({text:''})
        }
    }
    // gets the value from the text field using the onChange
    onChange = (e) => {
        this.setState({text: e.target.value})
    }
    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type='text' name='text' placeholder='search users...' value={this.state.text} onChange={this.onChange}/>
                    <input type='submit' value="search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}

export default Search
