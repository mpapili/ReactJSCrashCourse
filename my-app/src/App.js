import React, { Component } from 'react';
import Todos from './components/Todos';

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

    render() {
        return (
            <div className="App">
                <h1> My App! </h1>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
        );
        
    }
}

export default App;
