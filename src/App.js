
import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button , Card} from 'react-bootstrap'

class App extends Component {
  state = {
    person: {
      fullName: "Jendoubi Oussama",
      bio: "Lorem ipsum dolor sit amet",
      imgSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80 ",
      profession: "Web Developer",
    },
    shows: false,
    intervalId: 0,
    time: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShows = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="text-center"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ width: '25rem' }}>
      
        <Button onClick={this.toggleShows}>
          {this.state.shows ? "Hide" : "Show"} Profile
        </Button>
        {this.state.shows && (
          <div>
             <h2>{this.state.person.fullName}</h2>
            <Card.Body style={{padding:'35px'}} >
            <img src={this.state.person.imgSrc} alt="profile" width={300}/>
            <p>{this.state.person.bio}</p>
            <h3 style={{color:'red'}}>{this.state.person.profession}</h3>
            </Card.Body>
          </div>
        )}
        <p>Time since mount: {this.state.time} seconds</p>
       
    </Card>
      </div>
      
    );
  }
}


export default App;
