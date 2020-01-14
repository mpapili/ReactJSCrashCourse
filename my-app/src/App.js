import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';


class App extends Component {

    state = {
        todos: []
    }

    // upon mount
    componentDidMount() {
        // get "todos" from json placeholder API then  set 
        // -todos as  res.data
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then( res => this.setState({ todos: res.data }))
    }

    // Mark Complete (strikethrough)
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                    todo.completed = !todo.completed; // make it the opposite
               }
            return todo;
        }) }); // ugly amount of closing brackets
    }
    
    // Delete Todo
    delTodo = (id) => {
        
        // using backticks so we can insert a variable!
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res => this.setState({todos: [...this.state.todos.filter( todo => todo.id !== id)]}))
    }
    
    // Add Todo (accepts title)
    addTodo = (title) => {
        
        // create new todo to add
        
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title, 
            completed: false
        })
          .then(res => this.setState({ todos:
                                     [...this.state.todos, res.data]}));
        
    }

    // return our actual JSX
    render() {

        return (

            <Router>
                <div className="App">
                    <div className="container">
                        <Header />

                        <Route exact path="/" render = {props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos 
                                 todos={this.state.todos}
                                 markComplete={this.markComplete}
                                 delTodo={this.delTodo}/>
                            </ React.Fragment>
                        )} />

                        <Route path="/about">
                            <About />
                        </Route>
                        
                    </div>
                </div>
            </Router>

        );
        
    }
}

export default App;
