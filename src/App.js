import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component{
  state = {
    users:[],
    loading: false
  }

  // async componentDidMount(){
  //   // sets state to true
  //   this.setState({loading:true});
  //   //makes request and gets response from api
  //  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // gets data from request and sets state back to false
  //  this.setState({users:res.data,loading:false})
  // }
    // searching github users
  searchUsers = async (text) => {
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data.items, loading:false})
    };

  render(){
    return(
      <div className="App">
        <Navbar/>
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
          {/* passing in loading and users props */}
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    )
  }
}

export default App;
 