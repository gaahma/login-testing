// import React, { Component } from 'react';

// import './App.css';
// import Button from './components/Button'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Button />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';

class App extends React.Component{
  setUser(user){
    console.log("setUser called");
    this.setState({
      user: user
    });
  }
  render(){
    return (<BrowserRouter>
      <div className="ui container">
        <Route path="/" 
               exact component={() => <HomePage user={this.state.user}/>}/>

        <Route path="/login" 
               exact component={() => <LoginPage setCurrentUser={this.setUser} />}/>
      </div>
    </BrowserRouter>)
  }


}
export default App;

