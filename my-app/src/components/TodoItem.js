import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    // determine what style we should use for item
    getStyle = () => {
        return {
            background: '#F7F6E8',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
    
    render() {
        // pull our id and title as variables!
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}


// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem