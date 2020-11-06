import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import CreateSauce from './CreateSauce.js';
import UpdatePage from './UpdatePage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Link to='/'>List Page </Link>
                <Link to='/create'>Create a Sauce</Link>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreateSauce {...routerProps} />} 
                        />
                        <Route 
                            path="/update/:id" 
                            exact
                            render={(routerProps) => <UpdatePage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}