import React from 'react';
import './App.css';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import Profile from './Profile';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstName : "Mike",
            lastName : "Willis",
        }
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Link to="/profile">Profile </Link>
                    </div>
                    <div>
                        <Link to="/home"> Home </Link>
                    </div>
                    <Route path="/profile/:season" render={(routeProps) => <Profile firstName={this.state.firstName}
                                                                  lastName={this.state.lastName}
                                                                  {...routeProps}/>} />

                </BrowserRouter>
            </div>
        );
    }

}

export default App;
