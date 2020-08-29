import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
      <td>{props.todo.title}</td>
      <td>{props.todo.description}</td>
      <td>{props.todo.tag}</td>
      <td>{props.todo.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.todo._id}><button className="btn btn-danger">Update</button></Link> | <button className="btn btn-warning" onClick={() => { props.deleteTodo(props.todo._id) }}>Delete</button>
      </td>
    </tr>
  )

export default class ExercisesList extends Component{
    constructor(props) {
        super(props);
    
        this.deleteTodo = this.deleteTodo.bind(this)
    
        this.state = {todos: []};
      }

      componentDidMount() {
        axios.get('http://localhost:5000/todo/get')
          .then(response => {
            this.setState({ todos: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      popdel(ev){
        alert(ev);
      }

      deleteTodo(id) {
        axios.delete('http://localhost:5000/todo/'+id)
          .then(response => { this.popdel(response.data)});
    
        this.setState({
          todos: this.state.todos.filter(el => el._id !== id)
        })
      }

      todoList() {
        return this.state.todos.map(currenttodo => {
          return <Todo todo={currenttodo} deleteTodo={this.deleteTodo} key={currenttodo._id}/>;
        })
      }


    render(){
        return(
            <div className="container">
            <h3>Your Scheduler</h3><br></br>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Tag</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.todoList() }
              </tbody>
            </table>
          </div>
        )
    }
}