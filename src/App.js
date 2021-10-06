import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component{
  state = {
    users:[],
    loading: false
  }

  async componentDidMount(){
    // sets state to true
    this.setState({loading:true});
    //makes request and gets response from api
   const res = await axios.get('https://api.github.com/users');
    // gets data from request and sets state back to false
   this.setState({users:res.data,loading:false})
  }

  render(){
    return(
      <div className="App">
        <Navbar/>
        <div className="container">
          {/* passing in loading and users props */}
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    )
  }
}

export default App;
 