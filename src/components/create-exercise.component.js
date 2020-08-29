import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class CreateExercise extends Component{
    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state= {
            title:'',
            description:'',
            date: new Date(),
            tag:'',
            tags:[]
        }
    }

    componentDidMount() {
      this.setState({
        tags:["Personal","Travel","Life","Work"]

      })

       
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

    onSubmit(e){
        e.preventDefault();

        const todo ={
            title: this.state.title,
            description:this.state.description,
            tag:this.state.tag,
            date:this.state.date
        }
        //console.log(todo)
        
        axios.post('http://localhost:5000/todo/add', todo)
        .then(res=>this.popup(res.data));

        
    }

    render(){
        return(
        <div className="container">
            <h3>Create New Schedule Log</h3>
            <form onSubmit={this.onSubmit}>
                {/* <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                        this.state.users.map(function(user) {
                        return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                </div> */}
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
                <input type="submit" value="Add Todo" className="btn btn-success" />
                </div>
            </form>
        </div>
        )
    }
}