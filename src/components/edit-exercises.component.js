import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditExercises extends Component{
    constructor(props) {
        super(props);
    
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          title: '',
          description: '',
          tag: '',
          date: new Date(),
          tags:[]
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/todo/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              title: response.data.title,
              description: response.data.description,
              tag: response.data.tag,
              date: new Date(response.data.date),
              tags:["Personal","Travel","Life","Work"]
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    
          // axios.get('http://localhost:5000/users/')
          // .then(response => {
          //   if (response.data.length > 0) {
          //     this.setState({
          //       users: response.data.map(user => user.username),
          //     })
          //   }
          // })
          // .catch((error) => {
          //   console.log(error);
          // })
    
      }
    
      onChangeTitle(e) {
        this.setState({
          title: e.target.value
        })
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
    
      onChangeTag(e) {
        this.setState({
          tag: e.target.value
        })
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        })
      }
      popup(res){
        alert(res);
        window.location = '/';
      }
      onSubmit(e) {
        e.preventDefault();
    
        const todo = {
          title: this.state.title,
          description: this.state.description,
          tag: this.state.tag,
          date: this.state.date
        }
    
        console.log(todo);
    
        axios.post('http://localhost:5000/todo/update/' + this.props.match.params.id, todo)
          .then(res => this.popup(res.data))
          .catch(err=> console.log(err));
    
        
      }
    

    render(){
        return(
            <div className="container">
            <h3>Edit Log</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Title: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
                </div>
                <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                </div>
                <div className="form-group">
                <label>Tag: </label>
                <select className="form-control" value={this.state.tag} onChange={this.onChangeTag}>
                <option value="Personal" selected>Personal</option>
                <option value="Life">Life</option>
                <option value="Travel">Travel</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>

                </select>
                </div>
                <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
                </div>

      
              <div className="form-group">
                <input type="submit" value="Edit Log" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}