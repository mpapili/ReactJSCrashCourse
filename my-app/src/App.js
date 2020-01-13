import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';


class App extends Component {

    state = {
        todos: [
            {
                id: 1,
                title: 'Take Out Trash',
                completed: false
            },
            {
                id: 2,
                title: 'Learn React',
                completed: true
            },
            {
                id: 3,
                title: "Wash the Dishes",
                completed: false
            }
        ]
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
        
        // filter out id's 
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

    }
    
    // Add Todo (accepts title)
    addTodo = (title) => {
        
        // create new todo to add
        const newTodo = {
            id: 4, // hard-coded for now
            title: title,
            completed: false
        }
        
        // use spread-operator! return 
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    // return our actual JSX
    render() {

        return (

            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos 
                     todos={this.state.todos}
                     markComplete={this.markComplete}
                     delTodo={this.delTodo}
                    />
                </div>
            </div>

        );
        
    }
}

export default App;
